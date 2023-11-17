"use client";
import getPercentage from "@/utils/getPercentage";
import { Grid } from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";

const size = {
  width: 350,
  height: 200,
};
const theme = createTheme({
  overrides: {
    MuiSvgText: {
      root: {
        fill: "red", // Set the fill color for all SVG text components
      },
    },
  },
});
const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.common.white,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 30,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
const PieChartComp = ({ paidData }) => {
  const data = [
    { value: paidData?.trueCount, label: "Paid" },
    { value: paidData?.falseCount, label: "Unpaid" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <PieChart
          series={[{ data, innerRadius: 60 }]}
          arcLinkLabelsClass={pieArcLabelClasses.label}
          responsive
          maintainAspectRatio={false}
          {...size}
        >
          <PieCenterLabel>
            {Math.floor(
              getPercentage(paidData?.totalCount, paidData?.falseCount)
            )}
            %
          </PieCenterLabel>
        </PieChart>
      </Grid>
    </ThemeProvider>
  );
};

export default PieChartComp;
