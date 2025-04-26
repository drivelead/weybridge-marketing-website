import { NextRequest, NextResponse } from "next/server";
import S3 from "aws-sdk/clients/s3";

// @ts-ignore
const s3 = new S3({
  region: process.env.AWS_S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_SDK_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SDK_ACCESS_KEY_SECRET as string,
  },
  signatureVersion: "v4",
});

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  try {
    let { name, type, bucketDirectory } = body;
    const fileDirectory = bucketDirectory ? `${bucketDirectory}/${name}` : name;
    const fileParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileDirectory,
      Expires: 600,
      ContentType: type,
    };

    const url = await s3.getSignedUrlPromise("putObject", fileParams);

    return NextResponse.json(
      {
        url,
        fileUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_BUCKET_REGION}.amazonaws.com/${fileDirectory}`,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.log("nextjs api route: aws/s3/sign: error ", err);
    return NextResponse.json(
      { error: { message: err.message, success: false, data: null } },
      {
        status: 400,
      }
    );
  }
}
