import S3 from 'aws-sdk/clients/s3';

export async function POST(req: Request) {
  try {
    //  const s3 = new S3({
    //   accessKeyId: process.env.AWS_ACCESS_KEY,
    //   secretAccessKey: process.env.AWS_SECRET_KEY,
    //   region: process.env.AWS_REGION,
    //  });
    // const url =  s3.createPresignedPost(
    //   {
    //     Bucket: process.env.S3_BUCKET_NAME,
    //     Fields: {
    //       key: req.formData(),
    //       'Content-Type': req.query.fileType,
    //     },
    //     Expires: 60, // seconds
    //     Conditions: [
    //       ['content-length-range', 0, 1048576], // up to 1 MB
    //     ],
    //   },
    // );
  } catch (error) {}
}
