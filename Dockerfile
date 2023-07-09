FROM ubuntu:focal
WORKDIR /app
COPY package.json  ./
COPY . .
RUN apt-get update
RUN apt install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN curl -sLf -o /dev/null 'https://deb.nodesource.com/node_20.x/dists/focal/Release'
RUN echo 'deb-src [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x focal main' >> /etc/apt/sources.list.d/nodesource.list
RUN apt update && apt install -y nodejs
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt-get install yarn -y
RUN node --version; npm --version; yarn --version; npx --version
RUN yarn add expo
RUN npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config
EXPOSE 19006
CMD npx expo start --web
