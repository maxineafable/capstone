import { defineRelationsPart } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index, pgEnum, serial, varchar, date, integer } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});

export const session = pgTable("session", {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => /* @__PURE__ */ new Date()).notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' })
}, (table) => [
  index("session_userId_idx").on(table.userId),
]);

export const account = pgTable("account", {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
}, (table) => [
  index("account_userId_idx").on(table.userId),
]);

export const verification = pgTable("verification", {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
}, (table) => [
  index("verification_identifier_idx").on(table.identifier),
]);

export const profileSex = pgEnum('profile_sex', ['male', 'female']);

export const profile = pgTable("profile", {
  id: serial().primaryKey(),
  firstname: varchar("first_name", { length: 100 }).notNull(),
  middlename: varchar("middle_name", { length: 100 }),
  lastname: varchar("last_name", { length: 100 }).notNull(),
  suffix: varchar({ length: 10 }),
  birthdate: date("birth_date").notNull(),
  sex: profileSex().notNull(),
  userId: text("user_id").notNull().unique()
    .references(() => user.id, { onDelete: "cascade" }),
})

export const address = pgTable(
  "address",
  {
    id: serial().primaryKey(),
    houseNumber: varchar("house_number", { length: 100 }).notNull(),
    street: varchar({ length: 100 }).notNull(),
    purok: varchar({ length: 10 }).notNull(),
    barangay: varchar({ length: 100 }).notNull(),
    city: varchar({ length: 100 }).notNull(),
    province: varchar({ length: 100 }).notNull(),
    userId: text("user_id").notNull().unique()
      .references(() => user.id, { onDelete: "cascade" }),
  }
)

export const resident = pgTable(
  "resident",
  {
    id: serial().primaryKey(),
    // validId: residentValidIds().notNull(),
    // validIdFrontImage: text("valid_id_front_image").notNull(),
    // validIdBackImage: text("valid_id_back_image").notNull(),
    userId: text("user_id").notNull().unique()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
  },
)
export const barangayStaffPosition = pgEnum('barangay_staff_position', [
  'captain',
  'secretary',
  'councilor',
]);

export const barangayStaff = pgTable(
  "barangay_staff",
  {
    id: serial().primaryKey(),
    position: barangayStaffPosition().notNull(),
    userId: text("user_id").notNull().unique()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
  },
)

export const documentRequestStatus = pgEnum('document_request_status', [
  'pending',
  'in_progress',
  'ready_to_pickup',
]);

export const documentRequestType = pgEnum("document_request_type", [
  "certificate_of_residency",
  "certificate_of_indigency",
  "certificate_of_income",
  "certificate_of_good_moral",
]);

export const documentRequestValidIds = pgEnum('document_request_valid_id', [
  "national_id",
  "umid_card",
  "driver's_licenses",
  "passport",
  "postal_id",
  "voter's_id",
  "rpc_id",
  "senior_citizen_id",
  "pwd_id",
]);

export const documentRequest = pgTable("document_request", {
  id: serial().primaryKey(),
  purpose: text().notNull(),
  remarks: text(),
  status: documentRequestStatus().default("pending").notNull(),
  type: documentRequestType().notNull(),
  residentId: integer("resident_id")
    .notNull()
    .references(() => resident.id, { onDelete: "cascade" }),
  validIdType: documentRequestValidIds("valid_id_type"),
  validIdImage: text("valid_id_image"),
  rejected: boolean().default(false).notNull(),
  completedAt: timestamp("completed_at"),
  pickedUpAt: timestamp("picked_up_at"),
  requestedAt: timestamp('requested_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
})

export const barangayReportStatus = pgEnum('barangay_report_status', [
  'pending',
  'in_progress',
  'resolved',
]);

export const barangayReportCategory = pgEnum('barangay_report_category', [
  'road',
  'canal',
  'other',
]);

export const barangayReport = pgTable("barangay_report", {
  id: serial().primaryKey(),
  content: text().notNull(),
  status: barangayReportStatus().default("pending").notNull(),
  category: barangayReportCategory().default("other").notNull(),
  residentId: integer("resident_id")
    .notNull()
    .references(() => resident.id, { onDelete: "cascade" }),
  resolvedAt: timestamp("resolved_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
})

export const authRelations = defineRelationsPart({
  user,
  session,
  account,
  verification,
  resident,
  barangayStaff,
  profile,
  address,
  documentRequest,
  barangayReport,
}, (r) => ({
  user: {
    sessions: r.many.session({
      from: r.user.id,
      to: r.session.userId,
    }),
    accounts: r.many.account({
      from: r.user.id,
      to: r.account.userId,
    }),
    resident: r.one.resident({
      from: r.user.id,
      to: r.resident.userId,
    }),
    barangayStaff: r.one.barangayStaff({
      from: r.user.id,
      to: r.barangayStaff.userId,
    }),
    profile: r.one.profile({
      from: r.user.id,
      to: r.profile.userId,
    }),
    address: r.one.address({
      from: r.user.id,
      to: r.address.userId,
    }),
  },
  session: {
    user: r.one.user({
      from: r.session.userId,
      to: r.user.id,
    })
  },
  account: {
    user: r.one.user({
      from: r.account.userId,
      to: r.user.id,
    })
  },
  resident: {
    documentRequests: r.many.documentRequest({
      from: r.resident.id,
      to: r.documentRequest.residentId,
    }),
    brgyReports: r.many.barangayReport({
      from: r.resident.id,
      to: r.barangayReport.residentId,
    }),
  },
  documentRequest: {
    resident: r.one.resident({
      from: r.documentRequest.residentId,
      to: r.resident.id,
    }),
  },
  barangayReport: {
    resident: r.one.resident({
      from: r.barangayReport.residentId,
      to: r.resident.id,
    }),
  },
}));
