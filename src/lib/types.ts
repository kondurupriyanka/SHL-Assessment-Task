
export interface Assessment {
  id: string;
  name: string;
  url: string;
  description: string;
  remoteTestingSupport: boolean;
  adaptiveSupport: boolean;
  duration: string;
  testType: string;
  keywords: string[];
  skills: string[];
}

export interface RecommendationRequest {
  query: string;
}

export interface RecommendationResponse {
  recommendations: Assessment[];
  query: string;
}
