// const { USER_TYPES, REGULAR } = require("./config/constants");

module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "My GitHub",
    description: "My GitHub API",
  },
  servers: [
    {
      url: "http://localhost:3333/",
      description: "Local server",
    },
  ],
  paths: {
    "/repositories": {
      get: {
        tags: ["CRUD Repositories"],
        description: "Get Repositories",
        parameters: [],
        responses: {
          "200": {
            description: "Get Repositories Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Repository",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["CRUD Repositories"],
        description: "Create Repository",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Repository",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Create Repository Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Repository",
                },
              },
            },
          },
        },
      },
    },
    "/repositories/:id": {
      put: {
        tags: ["CRUD Repositories"],
        description: "Update Repository",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Repository",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Update Repository Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Repository",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["CRUD Repositories"],
        description: "Update Repository",
        parameters: [],
        responses: {
          "204": {
            description: "Delete Repository Success",
            content: {},
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Repository: {
        type: "object",
        properties: {
          title: {
            $ref: "#/components/schemas/title",
          },
          url: {
            $ref: "#/components/schemas/url",
          },
          techs: {
            $ref: "#/components/schemas/techs",
          },
        },
      },
      title: {
        type: "string",
        example: "my-github-api",
      },
      url: {
        type: "string",
        example: "https://github.com/caiodeambrosio/my-github-api",
      },
      techs: {
        type: "array",
        items: { type: "string", example: "node" },
      },
    },
  },
};
