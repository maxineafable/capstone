'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoginResident, loginResidentSchema } from "@/lib/zod/resident"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

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
import { LogIn, UserCircle2 } from "lucide-react"

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginResidentSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: LoginResident) {
    console.log("submit")
    console.log(data)
  }

  return (
    <div>
      <Card className="max-w-lg mx-auto mt-8 rounded-xl">
        <CardHeader className="text-center">
          <div className="">logo?</div>
          <CardTitle className="text-4xl font-bold">Welcome!</CardTitle>
          <div className="uppercase bg-blue-200 rounded-sm font-semibold text-xs py-1">Kalikid sur, cabanatuan city,  nueva ecija </div>
          <CardDescription className="text-black/50 max-w-100 mx-auto">Access barangay clearance, certificates, indigency,
            and community assistance online.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8"
          >
            <FieldGroup className="">
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
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="juan@gmail.com"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
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
                      aria-invalid={fieldState.invalid}
                      type="password"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button type="submit" className={"py-6 rounded-lg w-full mt-8"}>
              <LogIn />
              <span>Sign In</span>
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-blue-200 space-y-2 mx-4 p-4 rounded flex-col text-center">
          <p className="font-semibold">Don't have an online resident account yet?</p>
          <Button className={"rounded-lg px-4"}>
            <UserCircle2 />
            <span>Register</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
