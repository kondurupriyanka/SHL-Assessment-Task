
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";

export function ResultsSkeleton() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="animate-skeleton h-6 w-4/5"></div>
                <div className="animate-skeleton h-4 w-2/3 mt-2"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton h-5 w-5 rounded-full mx-auto"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton h-5 w-5 rounded-full mx-auto"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton h-4 w-16 mx-auto"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton h-4 w-24"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
