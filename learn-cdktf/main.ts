import { Construct } from "constructs";
import {App, TerraformOutput, TerraformStack} from "cdktf";
import {AwsProvider} from "@cdktf/provider-aws/lib/provider";
import {Instance} from "@cdktf/provider-aws/lib/instance";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1"
    });

    const ec2Instance = new Instance(this, "ec2-instance-cdktf", {
      ami: "ami-0230bd60aa48260c6",
      instanceType: "t2.micro",
      userData: "" +
        "#!/bin/bash\n" +
        "yum install wget unzip httpd -y\n" +
        "systemctl start httpd\n" +
        "systemctl enable httpd\n" +
        "wget https://tooplate.com/zip-templates/2117_infinite_loop.zip\n" +
        "unzip -o 2117_infinite_loop.zip\n" +
        "cp -r 2117_infinite_loop/* /var/www/html/\n" +
        "systemctl restart httpd",
      vpcSecurityGroupIds: ["sg-0144bdca62c5327ad"],
      tags: {
        Name: "learn-cdktf"
      }
    });

    new TerraformOutput(this, "public_ip", {
      value: ec2Instance.publicIp
    });
  }
}

const app = new App();
new MyStack(app, "learn-cdktf");
app.synth();
