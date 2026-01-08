import TableSearch from "@/components/reusableComponents/TableSearch";
import { Button } from "@/components/ui/button";
import React from "react";
import CertificationsImage from "@/assets/certifications.jpg";
import { Download } from "iconoir-react";
import AddCertificate from "./AddCertificate";

const certificationsData = [
  {
    id: 1,
    title: "Name of The Certificate",
    subtitle: "Name of The Certificate",
    pdus: 12,
    image: CertificationsImage,
    pdfUrl: "/dummy-pdf_2.pdf",
  },
  {
    id: 2,
    title: "Name of The Certificate",
    subtitle: "Name of The Certificate",
    pdus: 12,
    image: CertificationsImage,
    pdfUrl: "/dummy-pdf_2.pdf",
  },
  {
    id: 3,
    title: "Name of The Certificate",
    subtitle: "Name of The Certificate",
    pdus: 12,
    image: CertificationsImage,
    pdfUrl: "/dummy-pdf_2.pdf",
  },
    {
    id: 4,
    title: "Name of The Certificate",
    subtitle: "Name of The Certificate",
    pdus: 12,
    image: CertificationsImage,
    pdfUrl: "/dummy-pdf_2.pdf",
  },
];

const Certifications = () => {
const handleDownload = async (
  pdfUrl: string,
  fileName: string = "certificate.pdf"
): Promise<void> => {
  try {
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch PDF");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("PDF download error:", error);
  }
};



  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end items-center flex-wrap gap-3">
        <div className="flex gap-1 md:gap-3 items-center">
          <TableSearch />
          <AddCertificate />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {certificationsData.map((item) => (
          <div
            key={item.id}
            className="p-3 pb-5 bg-[#DBE8FB] rounded-lg inline-flex flex-col gap-4 lg:gap-5"
          >
            <div className="relative">
              <img
                src={item.image}
                alt="Certifications"
                className="w-full object-cover rounded-lg"
              />
              <Button
                className="!px-4 !py-[10px] absolute top-4 right-4 z-[1]"
                onClick={() =>
                  handleDownload(item.pdfUrl, `${item.title}.pdf`)
                }
              >
                <Download className="!w-5 !h-5" /> Download
              </Button>
            </div>

            <div className="flex flex-wrap items-start gap-4 w-full">
              <div className="flex flex-col gap-1 flex-1">
                <h4 className="text-black text-lg font-bold capitalize">
                  {item.title}
                </h4>
                <p className="text-paragraph text-sm font-medium">
                  {item.subtitle}
                </p>
              </div>

              <div className="px-[15.6px] py-2 bg-primary_blue rounded-lg flex flex-col items-center">
                <div className="text-white text-xl font-semibold">
                  {item.pdus}
                </div>
                <div className="text-white text-sm font-medium">PDUs</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
