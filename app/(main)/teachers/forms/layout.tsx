import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/app/(main)/teachers/forms/components/sidebar-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Identification",
    href: "/forms",
  },
  {
    title: "Physical Traits",
    href: "/forms/physicalTraits",
  },
  {
    title: "Medical History",
    href: "/forms/medicalHistory",
  },
  {
    title: "Patient Behavior",
    href: "/forms/behavior",
  },
  {
    title: "Diagnosis",
    href: "/forms/diagnosis",
  }
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Patient Information</h2>
          <p className="text-muted-foreground">
            Manage the features, history, and diagnosis of the patient
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
