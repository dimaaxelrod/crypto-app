import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDataManager } from "./hooks/useDataManager";
import { CoinsGridProps } from "./types";

export default function CoinsGrid({
  userCoins,
  setSelectedRows,
  isUserCoins,
}: CoinsGridProps) {
  const { columns, rows } = useDataManager(userCoins || [], isUserCoins);
  return (
    <Box sx={{ height: 600, width: "50%" }}>
      <DataGrid
        rows={rows || []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(e) => setSelectedRows(e)}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
