The generated model .d.ts file need to be updated with the following 2 lines:

# Long is imported whenever int64 support is required
import { Long } from "protobufjs/minimal";
import * as $protobuf from "protobufjs/minimal";

# original line which will cause the "no default export" error message
import * as $protobuf from "protobufjs";
