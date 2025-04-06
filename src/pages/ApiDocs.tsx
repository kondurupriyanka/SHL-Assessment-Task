
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiDocs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-bold tracking-tight">API Documentation</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Reference documentation for integrating with the SHL Assessment Recommendation API
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="example">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>API Overview</CardTitle>
                <CardDescription>
                  The SHL Assessment Recommendation API provides intelligent recommendations based on job descriptions or natural language queries.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Base URL</h3>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">
                    https://api.shl-assessment-finder.example.com/v1
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Authentication</h3>
                  <p className="mt-1">
                    All API requests require an API key to be included in the request headers.
                  </p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">
                    Authorization: Bearer YOUR_API_KEY
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Rate Limits</h3>
                  <p className="mt-1">
                    The API is rate-limited to 100 requests per minute per API key.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="endpoints">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>
                  Available endpoints for the SHL Assessment Recommendation API.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">GET /recommendations</h3>
                  <p className="mb-2">
                    Returns assessment recommendations based on a query parameter.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Query Parameters</h4>
                      <div className="bg-gray-100 p-3 rounded mt-1">
                        <p><span className="font-mono">q</span> <span className="text-gray-600">(required)</span>: The search query or job description</p>
                        <p><span className="font-mono">limit</span> <span className="text-gray-600">(optional)</span>: Maximum number of results (default: 10)</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Response Format</h4>
                      <pre className="bg-gray-100 p-3 rounded mt-1 overflow-auto text-sm">
{`{
  "recommendations": [
    {
      "id": "string",
      "name": "string",
      "url": "string",
      "description": "string",
      "remoteTestingSupport": boolean,
      "adaptiveSupport": boolean,
      "duration": "string",
      "testType": "string"
    }
  ],
  "query": "string"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">POST /recommendations</h3>
                  <p className="mb-2">
                    Returns assessment recommendations based on a JSON request body.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Request Body</h4>
                      <pre className="bg-gray-100 p-3 rounded mt-1 overflow-auto text-sm">
{`{
  "query": "string",
  "limit": number // optional, default: 10
}`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-medium">Response Format</h4>
                      <p>Same as GET /recommendations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="example">
            <Card>
              <CardHeader>
                <CardTitle>Example Usage</CardTitle>
                <CardDescription>
                  Code examples demonstrating how to use the API in different languages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">cURL</h3>
                  <pre className="bg-gray-100 p-3 rounded mt-1 overflow-auto text-sm">
{`curl -X GET "https://api.shl-assessment-finder.example.com/v1/recommendations?q=java%20developers" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">JavaScript (Fetch)</h3>
                  <pre className="bg-gray-100 p-3 rounded mt-1 overflow-auto text-sm">
{`// GET Request
fetch('https://api.shl-assessment-finder.example.com/v1/recommendations?q=java%20developers', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// POST Request
fetch('https://api.shl-assessment-finder.example.com/v1/recommendations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'java developers',
    limit: 5
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Python (Requests)</h3>
                  <pre className="bg-gray-100 p-3 rounded mt-1 overflow-auto text-sm">
{`import requests

# GET Request
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.shl-assessment-finder.example.com/v1/recommendations',
    params={'q': 'java developers'},
    headers=headers
)

print(response.json())

# POST Request
data = {
    'query': 'java developers',
    'limit': 5
}

response = requests.post(
    'https://api.shl-assessment-finder.example.com/v1/recommendations',
    json=data,
    headers=headers
)

print(response.json())`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t py-4 bg-gray-50">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SHL Assessment Finder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ApiDocs;
