import React from "react";
import Image from "next/image";
// External libraries
import { GridColDef } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import { colors } from "@/styles/themes";

export const useCertificates = () => {
  //******** Methods ********//

  const generateColumns = (t: any) => {
    const columns: GridColDef[] = [
      {
        field: "image",
        headerName: t("table_1_column_1"),
        width: 80,
        renderCell: (params) => (
          <Image
            style={{ borderRadius: "50%" }}
            src={params.value}
            alt="img"
            width={50}
            height={50}
          />
        ),
      },
      { field: "id", headerName: t("table_1_column_2"), width: 70 },
      { field: "name", headerName: t("table_1_column_3"), width: 300 },
      { field: "school", headerName: t("table_1_column_4"), width: 200 },
      {
        field: "link",
        headerName: t("table_1_column_5"),
        width: 150,
        renderCell: (params) => (
          <Link
            sx={{
              py: 0.5,
              px: 2,
              border: `1px solid ${colors.primary}`,
              borderRadius: 3,
            }}
            href={params.value}
            target="_blank"
            underline="none"
          >
            {t("table_1_column_5_1")}
          </Link>
        ),
      },
    ];
    return columns;
  };

  //******** States & Actions ********//

  return {
    generateColumns: generateColumns,
  };
};
