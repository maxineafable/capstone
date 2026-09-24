import { Button } from "@/components/ui/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto my-8 space-y-8">
      <div className="flex items-center justify-between bg-blue-200 rounded-xl p-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome back, Juan Dela Cruz Jr.!</h1>
          <p className="leading-relaxed text-black/50 max-w-3xl">
            Maligayang Pagdating sa inyong digital civic desk. Subaybayan ang inyong mga kahilingan at
            sumbong sa mabilis at tapat na serbisyo publiko.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-blue-200">
          <div className="p-4 rounded-lg bg-white flex flex-col gap-2 justify-between">
            <div className="uppercase text-xs text-start">Active Requests</div>
            <div className="font-bold text-4xl text-center">02</div>
          </div>
          <div className="p-4 rounded-lg bg-white flex flex-col gap-2 justify-between">
            <div className="uppercase text-xs text-start">Active Reports</div>
            <div className="font-bold text-4xl text-center">02</div>
          </div>
          <div className="p-4 rounded-lg bg-white flex flex-col gap-2 justify-between">
            <div className="uppercase text-xs text-start">Completed</div>
            <div className="font-bold text-4xl text-center">05</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Card className="">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Request a Document</CardTitle>
            <CardDescription>Humiling ng Opisyal na Dokumento o Sertipikasyon</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              Secure digitally authenticated barangay issuances
              compliant with local civic ordinances. Seamless request submission,
              automated recordsverification, and counter pickup scheduling.
            </p>
            <div className="bg-blue-200 p-4 rounded-lg mt-4">
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 *:font-semibold">
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Barangay Clearnce</li>
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Certificate of Indigency</li>
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Certificate of Residency</li>
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Barangay Business Endorsement</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="self-end">
            <Button className={"rounded-xl px-8 py-6"}>Start New Request</Button>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Report a Concern</CardTitle>
            <CardDescription>Mag-ulat ng Sumbong o Suliranin sa Komunidad</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              Directly escalate community infrastructure and sanitation issues.
              Upload site photographs, tag exact street locations,
              and receive directdispatcher logs from our Lupon Tagapamayapa and Tanod brigades.
            </p>
            <div className="bg-blue-200 p-4 rounded-lg mt-4">
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 *:font-semibold">
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Barangay Clearnce</li>
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Certificate of Indigency</li>
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Certificate of Residency</li>
                <li className="inline-flex gap-2 items-center"> <CheckCircle className="size-4" /> Barangay Business Endorsement</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="self-end">
            <Button className={"rounded-xl px-8 py-6"}>Start New Request</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="p-8 rounded-xl bg-blue-200">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="text-3xl font-bold">My Recent Requests & Reports</h2>
            <p>Mga Kasalukuyang Kahilingan at Sumbong na nasa ilalim ng pagsusuri o handa nang kunin.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center bg-blue-50 rounded p-1">
            <div className="text-sm font-semibold bg-blue-300 p-1 rounded">All Record (3)</div>
            <div className="text-sm font-semibold p-1 rounded">Documents (2)</div>
            <div className="text-sm font-semibold p-1 rounded">Reports (1)</div>
          </div>
        </div>
        <Table className="mt-8 bg-white rounded-lg">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="rounded-lg">
            <TableRow className="  uppercase font-semibold">
              <TableHead>Tracking Number</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date Filed</TableHead>
              <TableHead>Current Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Barangay Clearance</TableCell>
              <TableCell>October 24, 2026</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Barangay Clearance</TableCell>
              <TableCell>October 24, 2026</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
