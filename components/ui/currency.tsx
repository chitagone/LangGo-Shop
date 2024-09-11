"use client";
import { formatToKip } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div className="font-semibold">{formatToKip(Number(value))}</div>;
};

export default Currency;
