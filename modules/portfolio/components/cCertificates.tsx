import React from "react";
// External libraries
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "next-i18next";
// Data
import { certificates } from "@/modules/portfolio/data";
import { useCertificates } from "../hooks";

export const Certificates = () => {
  //******** Hooks ********//

  const { t } = useTranslation("common");
  const { generateColumns } = useCertificates();
  const columns = generateColumns(t);

  //******** Renders ********//

  return (
    <div style={{ height: 371, width: "100%" }}>
      <DataGrid
        rows={certificates}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
