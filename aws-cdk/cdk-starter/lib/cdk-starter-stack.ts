import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {Bucket, CfnBucket} from "aws-cdk-lib/aws-s3";
import {CfnOutput, CfnParameter, Duration} from "aws-cdk-lib";

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, id, {
      lifecycleRules: [{
        expiration: Duration.days(expiration),
      }]
    })
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 1,
            status: 'Enabled'
          }
        ],
      }
    })

    const duraton = new CfnParameter(this, 'duration', {
      default: 2,
      minValue: 1,
      maxValue: 100,
      type: 'Number'
    });

    const myL2Bucket = new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(duraton.valueAsNumber),
      }]
    });

    new CfnOutput(this, 'MyL2BucketName', {
      value: myL2Bucket.bucketName
    });

    new L3Bucket(this, 'MyL3Bucket', 3);
  }
}
