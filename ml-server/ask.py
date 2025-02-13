from langchain.prompts.chat import ChatPromptTemplate
# from langchain_community.chat_models import ChatOpenAI
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from dotenv import load_dotenv
import os

load_dotenv()


class Ask:
    def __init__(self):
        # Define the language model
        self.llm = ChatOpenAI(
            model="gpt-3.5-turbo",
            temperature=0,
            max_tokens=1000,
            openai_api_key=os.getenv('OPENAI_API_KEY'),
        )

        memory = ConversationBufferMemory(memory_size=3)
        self.conversation = ConversationChain(llm=self.llm,
                                              verbose=True,
                                              memory=memory,
                                              )
        self.i = 0

    def process(self, user_input):
        """
        Process user input and return the assistant's response.
        """
        language = ChatPromptTemplate.from_template("""
                Identify the language of the user input {input}.
                Your response should be one word.                                                                                                        
""")
        chain = language | self.llm
        lang = chain.invoke({'input': user_input})

#         translation=ChatPromptTemplate.from_template("""
#                 User can question in any language.
#                 If the user language is not English, the input will be translated to English or else the input will be used as it is.
#                 Here is the user question: {input}
# """)
#         chain = translation | self.llm
#         translated_prompt = chain.invoke({'input': user_input})

        prompt = ChatPromptTemplate.from_template("""      
        You are helpful assistant that helps farmers with their data-related queries.
        Here are the topics that they will ask can use:
        weather, crop diseases, cultivation techniques, market prices, fertilizers and soil health
        Here is the user question: {input}
        Your response should be accurate.  
        """)
        chain = prompt | self.llm
        decision = chain.invoke({'input': user_input})

        translation2 = ChatPromptTemplate.from_template("""
                convert the response {input} to the user language{lang}.                                                                                      
""")
        chain = translation2 | self.llm
        translated_prompt2 = chain.invoke(
            {'input': decision.content, 'lang': lang.content})
        return translated_prompt2.content
