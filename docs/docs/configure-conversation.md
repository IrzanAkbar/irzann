Create a `chat.yml` file with your configuration before starting the web service.

Below is an example of configuration using the Llama 2 7B GGML model, without vectorstore, to deploy a **generic conversational chatbot**

```yaml title="chat.yml"
llm:
  model_type: llama
  model_path: ./models/llama-2-7b-chat.ggmlv3.q3_K_L.bin # (1)
  model_download: https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGML/resolve/main/llama-2-7b-chat.ggmlv3.q3_K_L.bin
  temperature: 0.01    # Config how creative, but also potentially wrong, the model can be. 0 is safe, 1 is adventurous
  max_new_tokens: 1024 # Max number of words the LLM can generate

prompt:
  # Always use input for the human input variable with a generic agent
  variables: [input, history]
  template: |
    Your are an assistant, please help me

    {history}
    User: {input}
    AI Assistant:

info:
  title: "Libre Chat"
  version: "0.1.0"
  description: |
    Open source and free chatbot powered by [LangChain](https://python.langchain.com) and [llama.cpp](https://github.com/ggerganov/llama.cpp)

    See also: [📡 API](/docs) | [🖥️ Alternative UI](/ui)
  examples:
  - What is the capital of the Netherlands?
  - Which drugs are approved by the FDA to mitigate Alzheimer symptoms?
  - How can I create a logger with timestamp using python logging?
  favicon: https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/logo.png
  repository_url: https://github.com/vemonet/libre-chat
  public_url: https://chat.semanticscience.org
  contact:
    name: Vincent Emonet
    email: vincent.emonet@gmail.com
  license_info:
    name: MIT license
    url: https://raw.github.com/vemonet/libre-chat/main/LICENSE.txt
  workers: 4
```

1. We recommend to predownload the files, but you can provide download URLs that will be used if the files are not present
