import sys
import os
import io
from gradio_client import Client
# Receive arguments from Node.js
arg_from_node = sys.argv[1]


# Your Python code here...














def medical(text):
    old_stdout = sys.stdout
    new_stdout = io.StringIO()
    sys.stdout = new_stdout
    client = Client("peteparker456/medical_diagnosis_llama2")
    sys.stdout = old_stdout
    result = client.predict(
		message=text,
		system_message="""You are Medical AI Assistant. Please be thorough and provide an informative answer. 
    If you don't know the answer to a specific medical inquiry, advise seeking professional help.""",
		max_tokens=512,
		temperature=0.7,
		top_p=0.95,
		api_name="/chat"
    )
    print(result)
    return result

text = arg_from_node
r = medical(text)
# print(r)

    