import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import axios from "axios";

export default function DashboardPage() {
  const [resume, setResume] = useState(0);
  const [portfolio, setPortfolio] = useState(0);
  const [applicant, setApplicant] = useState(0);
  const [employer, setEmployer] = useState(0);
  const [google, setGoogle] = useState(0);
  const [local, setLocal] = useState(0);

  useEffect(() => {
    getCounts();
  }, []);

  const getCounts = () => {
    axios.get("/api/admin/getcounts").then((res) => {
      const counts = res.data.counts;
      setResume(counts.resume);
      setPortfolio(counts.portfolio);
      setApplicant(counts.applicant);
      setEmployer(counts.employer);
      setGoogle(counts.googleAccount);
      setLocal(counts.localAccount);
    });
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2"></div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Generated Resumes: {resume}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Generated Portfolios: {portfolio}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Applicant Count: {applicant}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>

        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Employer Count: {employer}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Google Accounts: {google}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Local Accounts: {local}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
