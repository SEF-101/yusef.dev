import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// route for resume download
export async function GET(request: NextRequest) {
  try {
    // get resume file path
    const filePath = path.join(process.cwd(), "public", "resume", "Yusef_Harb_Software_Engineer_Resume.pdf");
    
    // check if file exists
    if (!fs.existsSync(filePath)) {
      // go back home if no file
      return NextResponse.redirect(new URL("/?resumeError=true", request.url));
    }
    
    // read the pdf
    const fileBuffer = fs.readFileSync(filePath);
    
    // create response
    const response = new NextResponse(fileBuffer);
    
    // set download headers
    response.headers.set("Content-Disposition", "attachment; filename=Yusef_Harb_Software_Engineer_Resume.pdf");
    response.headers.set("Content-Type", "application/pdf");
    
    return response;
    
  } catch (error) {
    console.error("Error downloading resume:", error);
    // go back home if something breaks
    return NextResponse.redirect(new URL("/?resumeError=true", request.url));
  }
}
