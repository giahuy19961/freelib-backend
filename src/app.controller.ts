import { Controller } from "@nestjs/common";

@Controller()
export class AppController {
  hello() {
    console.log("helloworld");
  }
}
