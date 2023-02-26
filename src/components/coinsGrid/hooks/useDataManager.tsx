import { GridColDef } from "@mui/x-data-grid";
import { useGetCoinsByIdQuery } from "../../../store/coins/coins.api";
import { getTextColor } from "../../../utils/utils";
import { LabelComponent } from "../../label/LabelComponent";
import { CurrencyIcon } from "../styles";

export const useDataManager = (userCoins: string[], isUserCoins: boolean) => {
  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "",
      width: 90,
      renderCell: (params) => {
        return <CurrencyIcon src={params.formattedValue} alt="icon" />;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return <LabelComponent children={params.formattedValue} />;
      },
    },
    {
      field: "current_price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => {
        return <LabelComponent children={`${params.formattedValue} $`} />;
      },
    },
    {
      field: "price_change_percentage_24h",
      headerName: "24h",
      type: "number",
      width: 110,
      renderCell: (params) => {
        return (
          <LabelComponent
            labelColor={getTextColor(+params.formattedValue)}
            children={`${params.formattedValue}%`}
          />
        );
      },
    },
    {
      field: "market_cap",
      headerName: "Mkt Cap",
      width: 150,
      renderCell: (params) => {
        return <LabelComponent children={`${params.formattedValue} $`} />;
      },
    },
  ];

  const { data } = useGetCoinsByIdQuery(
    userCoins.toString().replaceAll(",", "%2C"),
    { pollingInterval: 5 * 60 * 1000 }
  );

  const rows = isUserCoins && userCoins?.length === 0 ? [] : data;

  return { columns, rows };
};
