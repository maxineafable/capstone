import CertificateOfGoodMoralForm from "@/components/document-request/CertificateOfGoodMoralForm"
import CertificateOfIncomeForm from "@/components/document-request/CertificateOfIncomeForm"
import CertificateOfIndigencyForm from "@/components/document-request/CertificateOfIndigencyForm"
import CertificateOfResidencyForm from "@/components/document-request/CertificateOfResidencyForm"
import { documentRequestType } from "@/db/schema"
import { redirect } from "next/navigation"

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  console.log(slug)

  const type = documentRequestType.enumValues.find(type => type === slug)

  if (!type) redirect('/document-request')

  return (
    <div className="">
      {type === 'certificate_of_good_moral' && <CertificateOfGoodMoralForm />}
      {type === 'certificate_of_income' && <CertificateOfIncomeForm />}
      {type === 'certificate_of_indigency' && <CertificateOfIndigencyForm />}
      {type === 'certificate_of_residency' && <CertificateOfResidencyForm />}
    </div>
  )
}