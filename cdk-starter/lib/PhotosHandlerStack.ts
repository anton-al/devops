import * as cdk from 'aws-cdk-lib';
import {Construct} from "constructs";
import {Fn} from "aws-cdk-lib";
import {Code, Function as Lambda, Runtime} from "aws-cdk-lib/aws-lambda";

interface PhotosHandlerStackProps extends cdk.StackProps {
  targetBucketArn: string;
}
export class PhotosHandlerStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: PhotosHandlerStackProps) {
    super(scope, id, props);

    new Lambda(this, 'PhotosHandler', {
      code: Code.fromInline(`exports.handler = async (event) => {
        console.log('Hello!: ' + process.env.TARGET_BUCKET);
      }`),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_16_X,
      environment: {
        TARGET_BUCKET: props.targetBucketArn
      }
    });

  }
}