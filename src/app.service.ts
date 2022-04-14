import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
	<div>
		<h1>Hello world</h1>
		<details>
			<summary>Expand me!</summary>
			<p>This be some real good hidden content!</p>
		</details>
	</div>
  `;
  }
}
