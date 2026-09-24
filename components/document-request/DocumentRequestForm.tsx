'use client'

import { DocumentRequest, documentRequestSchema } from '@/lib/zod/document-request'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

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


import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { CheckCircle, Contact } from 'lucide-react'
import { documentRequestValidIds } from '@/db/schema'

export default function DocumentRequestForm() {
  const form = useForm({
    resolver: zodResolver(documentRequestSchema),
    defaultValues: {
      purpose: "",
      remarks: "",
      validIdImage: null,
      validIdType: "national_id",
    }
  })

  function onSubmit(data: DocumentRequest) {
    console.log("submit")
    console.log(data)
  }

  return (
    <div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup className="">
          <Controller
            name="purpose"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="purpose">
                  Purpose
                </FieldLabel>
                <Input
                  {...field}
                  id="purpose"
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
            name="remarks"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="remarks">
                  Remarks
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="remarks"
                    // placeholder="I'm having an issue with the login button on mobile."
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  {/* <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value?.length}/100 characters
                    </InputGroupText>
                  </InputGroupAddon> */}
                </InputGroup>
                <FieldDescription>
                  Include steps to reproduce, expected behavior, and what
                  actually happened.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="space-y-8 flex-1 ">
            <div className="space-y-8 bg-white p-8 rounded-xl">
              <div className="flex items-center gap-2">
                <Contact />
                <h2 className="font-bold text-xl">Accepted Government IDs</h2>
              </div>
              <Controller
                name="validIdType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex flex-wrap max-w-xl"
                  >
                    {documentRequestValidIds.enumValues.map(id => (
                      <FieldLabel
                        key={id}
                        htmlFor={id}
                        className="p-2 rounded-lg bg-blue-200 has-data-checked:bg-blue-500 has-data-checked:[&_.check-icon]:block"
                      >
                        <CheckCircle
                          className="check-icon hidden size-4"
                        />
                        <span>{id}</span>
                        <RadioGroupItem value={id} id={id} className={"sr-only"} />
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                )}
              />
            </div>
          </div>
          <Controller
            name="validIdImage"
            control={form.control}
            render={({ field: { onChange, value, ...props }, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="validIdImage">
                  Valid ID Image
                </FieldLabel>
                <Input
                  {...props}
                  id="validIdImage"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    onChange(e.target.files?.[0])
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Button type='submit'>Create Request</Button>
        </FieldGroup>
      </form>
    </div>
  )
}
