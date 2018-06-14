# API Project: Request Header Parser Microservice for freeCodeCamp

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:
<p>
          <code>
            <a href="https://header-parser-microservice.glitch.me/api/whoami">https://header-parser-microservice.glitch.me/api/whoami</a>
          </code>
        </p>

#### Example output:
{<br>
"IP address": "31.4.243.29",<br>
"language": "en,en-US",<br>
"system info": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"<br>
}