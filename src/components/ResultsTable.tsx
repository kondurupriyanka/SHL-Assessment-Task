
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";
import { Assessment } from "@/lib/types";

interface ResultsTableProps {
  assessments: Assessment[];
}

export function ResultsTable({ assessments }: ResultsTableProps) {
  if (assessments.length === 0) {
    return null;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Assessment</TableHead>
            <TableHead className="text-center">Remote Testing</TableHead>
            <TableHead className="text-center">Adaptive/IRT</TableHead>
            <TableHead className="text-center">Duration</TableHead>
            <TableHead>Test Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assessments.map((assessment) => (
            <TableRow key={assessment.id}>
              <TableCell className="font-medium">
                <a 
                  href={assessment.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {assessment.name}
                </a>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {assessment.description}
                </p>
              </TableCell>
              <TableCell className="text-center">
                {assessment.remoteTestingSupport ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {assessment.adaptiveSupport ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">{assessment.duration}</TableCell>
              <TableCell>{assessment.testType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
