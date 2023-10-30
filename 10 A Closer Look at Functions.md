## 1️⃣ **Default Parameters**

## 2️⃣ How Passing Arguments Works: Value vs. Reference

## 3️⃣ First-Class and Higher-Order Functions

## 4️⃣

## 5️⃣

## 6️⃣

## 7️⃣

## 🧠 **Challenge 1**

## 8️⃣

## 9️⃣

## 🔟

## 🧠 **Challenge 2**

// check

## Hello

git filter-branch --env-filter '
if [ "$GIT_COMMITTER_EMAIL" = "dev-ejohnpaguntalan@gmail.com" ]
then
export GIT_COMMITTER_NAME="$GIT_COMMITTER_NAME"
    export GIT_COMMITTER_EMAIL=dev.ejohnpaguntalan@gmail.com
fi
if [ "$GIT_AUTHOR_EMAIL" = "dev-ejohnpaguntalan@gmail.com" ]
then
export GIT_AUTHOR_NAME="$GIT_AUTHOR_NAME"
export GIT_AUTHOR_EMAIL=dev.ejohnpaguntalan@gmail.com
fi
' -- --all
