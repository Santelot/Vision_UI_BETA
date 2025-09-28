// main/src/layouts/dashboards/elegant-globe/index.js

/**
=========================================================
*               Elegant Globe Dashboard                 *
*         Creado para el proyecto de GitHub Pages       *
*      Utilizando Vision UI PRO React - Componentes     *
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import breakpoints from "assets/theme/base/breakpoints";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Globe from "examples/Globe";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";

// Componentes de visualización de datos
import ActiveUsers from "layouts/dashboards/default/components/ActiveUsers";
import SalesOverview from "layouts/dashboards/default/components/SalesOverview";

// Data para la tabla de ventas
import salesTableData from "layouts/dashboards/elegant-globe/data/salesTableData";

// Iconos
import { IoWallet, IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe as GlobeIcon } from "react-icons/bs";

function ElegantGlobeDashboard() {
  const { values } = breakpoints;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container>
          {/* --- SECCIÓN DEL GLOBO Y TÍTULO --- */}
          <Grid item xs={12} lg={7} xl={8}>
            <VuiBox mb={3} p={1}>
              <VuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
              >
                Visión Global Interactiva
              </VuiTypography>
              <VuiTypography color="text" variant="button" fontWeight="regular">
                Bienvenido a tu centro de control global.
              </VuiTypography>
            </VuiBox>
          </Grid>
          <VuiBox
             display={{ xs: "none", md: "block" }}
             position="absolute"
             top="10%"
             right="0"
             width="45%" // Ajusta el tamaño del contenedor del globo si es necesario
             height="100%"
          >
            <Globe
              canvasStyle={{
                marginTop: "-2rem",
                width: "100%", 
                height: "100%"
              }}
            />
          </VuiBox>
          
          {/* --- TARJETAS DE ESTADÍSTICAS --- */}
          <Grid item xs={12} lg={7} xl={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={5} lg={6} xl={4}>
                <VuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "Ingresos Totales", fontWeight: "bold" }}
                    count="$125,430"
                    percentage={{ color: "success", text: "+15%" }}
                    icon={<IoWallet color="white" />}
                  />
                </VuiBox>
                <MiniStatisticsCard
                  title={{ text: "Nuevos Usuarios", fontWeight: "bold" }}
                  count="3,120"
                  percentage={{ color: "success", text: "+8%" }}
                  icon={<GlobeIcon color="white" />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={6} xl={4}>
                <VuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "Nuevos Clientes", fontWeight: "bold" }}
                    count="+1,800"
                    percentage={{ color: "error", text: "-1.5%" }}
                    icon={<IoDocumentText color="white" />}
                  />
                </VuiBox>
                <MiniStatisticsCard
                  title={{ text: "Ventas Globales", fontWeight: "bold" }}
                  count="$450,200"
                  percentage={{ color: "success", text: "+20%" }}
                  icon={<FaShoppingCart color="white" />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* --- GRÁFICOS Y TABLAS --- */}
        <VuiBox mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>
               <Card>
                 <SalesTable title="Ventas por Región" rows={salesTableData} />
               </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
               <ActiveUsers />
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SalesOverview />
            </Grid>
          </Grid>
        </VuiBox>

      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ElegantGlobeDashboard;
