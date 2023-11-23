import {Stack, StackProps} from "aws-cdk-lib";
import {Code, Function as LambdaFunction, Runtime} from "aws-cdk-lib/aws-lambda";
import {Construct} from "constructs";
import {join} from "path";
import {LambdaIntegration} from "aws-cdk-lib/aws-apigateway";
import {ITable} from "aws-cdk-lib/aws-dynamodb";

interface LambdaStackProps extends StackProps {
  spacesTable: ITable
}

export class LambdaStack extends Stack{

  public readonly helloLambdaIntegration: LambdaIntegration;
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const helloLambda = new LambdaFunction(this, "HelloLambda", {
      code: Code.fromAsset(join( __dirname, '..', '..', 'services') ),
      handler: "hello.main",
      runtime: Runtime.NODEJS_18_X,
      environment: {
        TABLE_NAME: props.spacesTable.tableName
      }
    });

    this.helloLambdaIntegration = new LambdaIntegration(helloLambda);
  }
}