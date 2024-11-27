import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const index = () => {
  // Generate timestamp Januari
  const generateTimestamps = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(`2024-01-${i.toString().padStart(2, "0")}`);
    }
    return dates;
  };

  const labels = generateTimestamps();

  // Data dummy untuk `in` dan `out`
  const data = {
    labels, // Timestamp sebagai label
    datasets: [
      {
        label: "In", // Dataset untuk `in`
        data: Array.from({ length: 31 }, () =>
          Math.floor(Math.random() * 1000)
        ), // Data dummy random
        borderColor: "rgba(54, 162, 235, 1)", // Warna garis `in`
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Warna area di bawah garis `in`
        // tension: 0.4, // Kelengkungan garis
      },
      {
        label: "Out", // Dataset untuk `out`
        data: Array.from({ length: 31 }, () =>
          Math.floor(Math.random() * 1000)
        ), // Data dummy random
        borderColor: "rgba(255, 99, 132, 1)", // Warna garis `out`
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Warna area di bawah garis `out`
        tension: 0.4, // Kelengkungan garis
      },
    ],
  };

  // Opsi tambahan untuk Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Posisi legenda
      },
      title: {
        display: true,
        text: "UNI Interface 1", // Judul grafik
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tanggal (Januari 2024)", // Label sumbu x
        },
      },
      y: {
        title: {
          display: true,
          text: "Nilai Data", // Label sumbu y
        },
      },
    },
  };

  return (
    <Flex
      height="100vh"
      direction={{ base: "column", md: "row" }}
      width="100vw"
    >
      {/* Sidebar */}
      <Box bg="#5156be" width="200px" p={5} textAlign="center">
        <Flex direction="column" gap="4" alignItems="flex-start">
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/tambah-data" style={{ color: "white" }}>
            Tambah Data
          </Link>
          <Link to="/activiy" style={{ color: "white" }}>
            Activity
          </Link>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex flex="1" direction="column">
        {/* Title */}
        <Box bg="#6266c4" height="auto" p={4} textAlign="center">
          <Flex direction="row" gap="4">
            <Text color="white">hostname: 'XXXXXXX'</Text>
            <Text color="white">chart_count: 6</Text>
          </Flex>
        </Box>

        {/* Info */}
        <Box bg="#f0f0f0" height="auto" p={4} textAlign="center">
          <Flex direction="row" gap="6" alignItems="center">
            <Text>UNI Interface 1</Text>
            <Text>to_KCP_BCA_Pasar_Minggu</Text>
            <Text>Status: OK</Text>
          </Flex>
        </Box>

        {/* Grafik */}
        <Box flex="1" bg="white" p={4} textAlign="center" height="50%">
          <Line data={data} options={options} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default index;
