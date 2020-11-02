# Design and Architecture

## Application as platform-as-a-service

The `lipipravaaha` application for the initial release will be an Electron based app with the front-end based on react and the back-end for persistence and I/O within the single application.

Following the first release, this single Electron application will be re-architected as a platform with following abstracted components:

1. Front-end
2. Back-end
    - Based on C++.
    - A service oriented library that will expose an API.
    - API will be based on gPRC.
    - Data serialization will  be based on Protocol Buffers or Flat Buffers.
3. A CLI
    - That calls out to the API exposed by the back-end.

These components will reside in their own repositories. A new `lipipravaaha` organization will be created on GitHub under which these repositories will reside. A good example of this methodology is the [marp project](https://github.com/marp-team).

These abstractions will allow for:

- The desktop application to be constructed in multiple ways using various front-end frameworks.
- Command line version of the app.
- Providing the application as a service.

The goal of this re-architecture effort is to:

- Abstract out all non-UI components into a separate RPC based native code module.
- Utilize gRPC to provide API calls.
- Develop the _back-end as a service_ using C++.
- Expose this functionality using node.js native module framework [[ref](https://blog.risingstack.com/writing-native-node-js-modules/)]

The motivation behind this effort being:

- Learning about node.js native modules
- Learning [gRPC](https://grpc.io/).
- Learning [Protocol Buffers](https://developers.google.com/protocol-buffers/) and [FlatBuffers](https://github.com/google/flatbuffers).
- Making the application more performance given:
  - The limitations of javascript.
  - The inherent performance cost of the Electron framework.
- Going back to doing some coding in C++; it has been quite a few years since I moved away from un-managed to managed code.
- Learning about using C++ tooling by doing the development in a non Visual Studio environment.
  - Using G++, GCC or clang.
  - Using Make.
  - Potential editor options being:
    - VS Code
    - Geany
    - Sublime Text
