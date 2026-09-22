"use client"

import { RegisterResident, registerResidentSchema, ResidentValidId, residentValidIdEnum } from "@/lib/zod/resident";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { ArrowLeft, ArrowRight, Contact, Lock, MapPinHouse, SquareUserRound } from "lucide-react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";

export default function SignupForm() {
  const [step, setStep] = useState(1)

  const form = useForm({
    resolver: zodResolver(registerResidentSchema),
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      suffix: "",
      birthdate: new Date(),
      address: {
        houseNumber: "",
        street: "",
        purok: "",
      },
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      validId: "National ID",
    },
    mode: "onBlur",
  });

  const stepFields: (keyof RegisterResident)[][] = [
    ["firstname", "middlename", "lastname", "suffix", "address", "phone", "email", "password", "confirmPassword"],
    ["validId"],
  ]

  async function nextStep() {
    const valid = await form.trigger(stepFields[step - 1], { shouldFocus: true })
    if (!valid) return
    setStep(p => p + 1)
  }

  function onSubmit(data: RegisterResident) {
    console.log("submit")
  }

  return (
    <div className="max-w-7xl mx-auto">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-16"
      >
        {step === 1 && (
          <div className="rounded-xl p-8 bg-white space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <SquareUserRound />
                <h2 className="font-bold text-xl">Full Legal Name</h2>
              </div>
              <FieldGroup className="grid grid-cols-4 gap-4">
                <Controller
                  name="firstname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="firstname">
                        First Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id="firstname"
                        aria-invalid={fieldState.invalid}
                        placeholder="Juan"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="middlename"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="middlename">
                        Middle Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id="middlename"
                        aria-invalid={fieldState.invalid}
                        placeholder="Santos"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="lastname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="lastname">
                        Last Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id="lastname"
                        aria-invalid={fieldState.invalid}
                        placeholder="Dela Cruz"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="suffix"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="suffix">
                        Suffix
                      </FieldLabel>
                      <Input
                        {...field}
                        id="suffix"
                        aria-invalid={fieldState.invalid}
                        placeholder="Jr"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <MapPinHouse />
                <h2 className="font-bold text-xl">Complete Address</h2>
              </div>
              <FieldGroup className="grid grid-cols-3">
                <Controller
                  name="address.houseNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="address.houseNumber">
                        House Number
                      </FieldLabel>
                      <Input
                        {...field}
                        id="address.houseNumber"
                        aria-invalid={fieldState.invalid}
                        placeholder="20"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="address.street"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="address.street">
                        Street
                      </FieldLabel>
                      <Input
                        {...field}
                        id="address.street"
                        aria-invalid={fieldState.invalid}
                        placeholder="Rizal Street"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="address.purok"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="address.purok">
                        Purok
                      </FieldLabel>
                      <Input
                        {...field}
                        id="address.purok"
                        aria-invalid={fieldState.invalid}
                        placeholder="purok dropdown todo"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Contact />
                <h2 className="font-bold text-xl">Contact Details</h2>
              </div>
              <FieldGroup className="grid grid-cols-2">
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phone">
                        Mobile Number
                      </FieldLabel>
                      <Input
                        {...field}
                        id="phone"
                        aria-invalid={fieldState.invalid}
                        placeholder="+63 912 345 6789"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">
                        Email Address
                      </FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="juan.delacruz@email.com"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Lock />
                <h2 className="font-bold text-xl">Account Security</h2>
              </div>
              <FieldGroup className="grid grid-cols-2">
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="password">
                        Password
                      </FieldLabel>
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="confirmPassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="confirmPassword">
                        Confirm Password
                      </FieldLabel>
                      <Input
                        {...field}
                        id="confirmPassword"
                        type="password"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex gap-8">
            <div className="space-y-8 flex-1 ">
              <div className="space-y-8 bg-white p-8 rounded-xl">
                <div className="flex items-center gap-2">
                  <Contact />
                  <h2 className="font-bold text-xl">Accepted Government IDs</h2>
                </div>
                <FieldGroup className="">
                  <Controller
                    name="validId"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="flex flex-wrap max-w-xl"
                      >
                        {residentValidIdEnum.options.map(id => (
                          <FieldLabel
                            key={id}
                            htmlFor={id}
                            className="p-2 rounded-lg bg-blue-400 has-data-checked:bg-blue-500"
                          >
                            {id}
                            <RadioGroupItem value={id} id={id} className={"sr-only"} />
                          </FieldLabel>
                        ))}
                      </RadioGroup>
                    )}
                  />
                </FieldGroup>
              </div>
              <div className="space-y-8 bg-white p-8 rounded-xl">
                <div className="flex items-center gap-2">
                  <Contact />
                  <h2 className="font-bold text-xl">Valid Government ID (Front)</h2>
                </div>
                <Field>
                  <FieldLabel htmlFor="picture">Picture</FieldLabel>
                  <Input id="picture" type="file" />
                  <FieldDescription>Select a picture to upload.</FieldDescription>
                </Field>
              </div>
              <div className="space-y-8 bg-white p-8 rounded-xl">
                <div className="flex items-center gap-2">
                  <Contact />
                  <h2 className="font-bold text-xl">Valid Government ID (Back)</h2>
                </div>
                <Field>
                  <FieldLabel htmlFor="picture">Picture</FieldLabel>
                  <Input id="picture" type="file" />
                  <FieldDescription>Select a picture to upload.</FieldDescription>
                </Field>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h2>Alituntunin sa Dokumento</h2>
            </div>
          </div>

        )}
        {step === 1 && (
          <Button
            type="button"
            className={"w-full rounded-xl py-6"}
            onClick={nextStep}
          >
            <span>Continue to Step 2 (Identity Verification)</span>
            <ArrowRight />
          </Button>
        )}

        {step === 2 && (
          <div className="flex items-center mt-16 justify-between">
            <Button
              type="button"
              onClick={() => setStep(p => p - 1)}
              className={"rounded-xl px-8 py-6"}
            >
              <ArrowLeft />
              <span>Back to step 1</span>
            </Button>
            <Button
              type="submit"
              className={"rounded-xl px-8 py-6"}
            >
              <span>Submit Registration</span>
              <ArrowRight />
            </Button>
          </div>
        )}
      </form>

    </div>
  );
}
