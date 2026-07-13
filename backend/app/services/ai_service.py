import os

from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Read API key
# Read API key
api_key = os.getenv("GEMINI_API_KEY")

print("API Key Loaded:", api_key[:10] + "..." if api_key else "None")
print("API Key Length:", len(api_key) if api_key else 0)

if not api_key:
    raise ValueError("GEMINI_API_KEY is not set in the .env file.")

# Create Gemini client
client = genai.Client(api_key=api_key)


def generate_response(user_message: str) -> str:
    """
    Sends the user's message to Gemini and returns the response.
    """

    prompt = f"""
You are an AI Life Assistant for India.

Your role is to help users with:
- Passport
- Aadhaar
- PAN Card
- Driving Licence
- Government Schemes
- General guidance

Be polite, clear, and concise.

User: {user_message}
"""

    response = client.models.generate_content(
    model="gemini-3.5-flash",
    contents=prompt,
)

    return response.text