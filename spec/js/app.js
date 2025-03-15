
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Pokemon Trading API",
    "description": "This API helps users to trade pokemons",
    "version": "0.0.1"
  },
  "servers": {
    "websockets": {
      "host": "localhost:8080",
      "protocol": "ws"
    }
  },
  "channels": {
    "TradeList": {
      "address": "/trade",
      "messages": {
        "tradeList": {
          "payload": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "game": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "pokemon": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "want": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-6>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-2>"
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-unique-object-id": "tradeList",
          "x-parser-message-name": "tradeList"
        }
      },
      "x-parser-unique-object-id": "TradeList"
    },
    "OpenTrade": {
      "address": "/new",
      "messages": {
        "openTrade": {
          "payload": {
            "type": "object",
            "properties": {
              "game": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "pokemon": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "want": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-7>"
          },
          "x-parser-unique-object-id": "openTrade",
          "x-parser-message-name": "newTrade"
        }
      },
      "x-parser-unique-object-id": "OpenTrade"
    },
    "CloseTrade": {
      "address": "/close",
      "messages": {
        "closeTrade": {
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-11>"
          },
          "x-parser-unique-object-id": "closeTrade",
          "x-parser-message-name": "closeTrade"
        }
      },
      "x-parser-unique-object-id": "CloseTrade"
    }
  },
  "operations": {
    "fetchTradeList": {
      "action": "receive",
      "channel": "$ref:$.channels.TradeList",
      "messages": [
        "$ref:$.channels.TradeList.messages.tradeList"
      ],
      "x-parser-unique-object-id": "fetchTradeList"
    },
    "openNewTrade": {
      "action": "send",
      "channel": "$ref:$.channels.OpenTrade",
      "messages": [
        "$ref:$.channels.OpenTrade.messages.openTrade"
      ],
      "x-parser-unique-object-id": "openNewTrade"
    },
    "closeTrade": {
      "action": "send",
      "channel": "$ref:$.channels.CloseTrade",
      "messages": [
        "$ref:$.channels.CloseTrade.messages.closeTrade"
      ],
      "x-parser-unique-object-id": "closeTrade"
    }
  },
  "components": {
    "messages": {
      "tradeList": "$ref:$.channels.TradeList.messages.tradeList",
      "newTrade": "$ref:$.channels.OpenTrade.messages.openTrade",
      "closeTrade": "$ref:$.channels.CloseTrade.messages.closeTrade"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  