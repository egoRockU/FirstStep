import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2"></div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Generated Resumes</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Generated Portfolios</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Applicant Count</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>

        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Employer Count</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Google Accounts</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Local Accounts</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
