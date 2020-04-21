# Lamborghini_registration (Using the concept of auth registration)
This is project based on the Authentication and Security of web applications.There are basically 6 levels of Authenticaton and Security.
----------------------------------------------------
LEVEL 1 :
Just to retrieve info. from the frontend fields and storing in the database, there is no special security provided for the passwords stored.



LEVEL 2 (ENCRYPTION) :
Here in this level (2), it includes the concept of "Encryption", which means that is a process that encodes a message or file so that it can be only be read by certain people.
Encryption uses an algorithm to scramble, or encrypt, data and then uses a key for the receiving party to unscramble, or decrypt, the information. 
The message contained in an encrypted message is referred to as plaintext. In its encrypted, unreadable form it is referred to as ciphertext.

Encryption uses algorithms to scramble your information. It is then transmitted to the receiving party, who is able to decode the message with a key.
There are many types of algorithms, which all involve different ways of scrambling and then decrypting information.
Keys are usually generated with random number generators, or computer algorithms that mimic random number generators.
A more complex way that computers can create keys is by using user mouse movement to create unique seeds. 
Modern systems that have forward secrecy involve generating a fresh key for every session, to add another layer of security.



LEVEL 3 (HASHING) :
Hashing is an important Data Structure which is designed to use a special function called the Hash function which is used to map a given value with a particular key for faster access of elements. 
The efficiency of mapping depends of the efficiency of the hash function used.The hash function is used to index the original value or key and then used later each time the data associated with the value or key is to be retrieved.
Thus, hashing is always a one-way operation. There's no need to "reverse engineer" the hash function by analyzing the hashed values. In fact, the ideal hash function can't be derived by such analysis. 
A good hash function also should not produce the same hash value from two different inputs. If it does, this is known as a collision. 
A hash function that offers an extremely low risk of collision may be considered acceptable.



LEVEL 4 (SALTING) :
In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase.
Salts are used to safeguard passwords in storage. Historically a password was stored in plaintext on a system, but over time additional safeguards developed to protect a user's password against being read from the system. A salt is one of those methods.
A new salt is randomly generated for each password. In a typical setting, the salt and the password (or its version after key stretching) are concatenated and processed with a cryptographic hash function, and the resulting output (but not the original password) is stored with the salt in a database.
Hashing allows for later authentication without keeping and therefore risking exposure of the plaintext password in the event that the authentication data store is compromised.
Salts defend against a pre-computed hash attack.
Since salts do not have to be memorized by humans they can make the size of the hash table required for a successful attack prohibitively large without placing a burden on the users.
Since salts are different in each case, they also protect commonly used passwords, or those users who use the same password on several sites, by making all salted hash instances for the same password different from each other. 



LEVEL 5 (CONCEPT OF COOKIES AND SESSIONS) :
Cookies and Sessions are used to store information. Cookies are only stored on the client-side machine, while sessions get stored on the client as well as a server.

Session

A session creates a file in a temporary directory on the server where registered session variables and their values are stored. This data will be available to all pages on the site during that visit.

A session ends when the user closes the browser or after leaving the site, the server will terminate the session after a predetermined period of time, commonly 30 minutes duration.

Cookies

Cookies are text files stored on the client computer and they are kept of use tracking purpose. Server script sends a set of cookies to the browser. For example name, age, or identification number etc. The browser stores this information on a local machine for future use.

When next time browser sends any request to web server then it sends those cookies information to the server and server uses that information to identify the user.



LEVEL 6 (OAUTH 2.0 AND GOOGLE SIGN-IN):
OAuth 2.0 is the industry-standard protocol for authorization. 
OAuth 2.0 focuses on client developer simplicity while providing specific authorization flows for web applications, desktop applications, mobile phones, and living room devices. 
This specification and its extensions are being developed within the IETF OAuth Working Group. 



 //////////////////////////////////////////////////////////////
PROJECT DETAILS ///////////////////////////////////////////////////////////
1. DEPENDENCIES USED: 
  a. bcrypt
  b. body-parser
  c. dotenv
  d. express
  e. express-session
  f. mongoose-findorcreate
  g. passport
  h. passport-local-mongoose
  i. passport-google-oauth20
  j. passport-github
  k. mongodb
  l. passport-local
  
 2. SERVER-SIDE LANGUAGE USED : node.js and runned on port 3000

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
