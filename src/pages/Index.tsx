
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommendations } from "@/lib/recommendationService";
import { Assessment } from "@/lib/types";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { ResultsTable } from "@/components/ResultsTable";
import { ResultsSkeleton } from "@/components/ResultsSkeleton";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['recommendations', searchQuery],
    queryFn: () => fetchRecommendations(searchQuery || ""),
    enabled: searchQuery !== null,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Find the Perfect SHL Assessment
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Enter a job description or search query to get tailored assessment recommendations
          </p>
        </div>

        <SearchForm onSearch={handleSearch} isLoading={isLoading} />

        <div className="mt-10">
          {searchQuery && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Recommended Assessments</h2>
              <p className="text-muted-foreground">
                Based on your search: "{searchQuery}"
              </p>
            </div>
          )}

          {isLoading && <ResultsSkeleton />}
          
          {error && (
            <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-600">
              An error occurred while fetching recommendations. Please try again.
            </div>
          )}
          
          {!isLoading && !error && data && (
            data.recommendations.length > 0 ? (
              <ResultsTable assessments={data.recommendations} />
            ) : (
              <div className="bg-amber-50 p-4 rounded-md border border-amber-200 text-amber-600">
                No matching assessments found. Try modifying your search query.
              </div>
            )
          )}
        </div>
      </main>
      <footer className="border-t py-4 bg-gray-50">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SHL Assessment Finder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
