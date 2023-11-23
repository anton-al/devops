import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from "aws-cdk-lib/pipelines";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'AwesomePipeline', {
      pipelineName: 'AwesomePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('anton-al/devops', 'cicd-practice'),
        commands: [
          'cd aws-cdk/cdk-cicd',
          'npm ci',
          'npx cdk synth'
        ],
        primaryOutputDirectory: 'aws-cdk/cdk-cicd/cdk.out'
      })
    })
  }
}
