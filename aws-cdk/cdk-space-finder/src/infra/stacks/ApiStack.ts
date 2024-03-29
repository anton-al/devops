import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {LambdaIntegration, RestApi} from "aws-cdk-lib/aws-apigateway";

interface ApiStackProps extends StackProps {
  helloLambdaIntegration: LambdaIntegration
}

export class ApiStack extends Stack{
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "SpacesApi");
    const spacesResourse = api.root.addResource("spaces");
    spacesResourse.addMethod('GET', props.helloLambdaIntegration);
  }
}