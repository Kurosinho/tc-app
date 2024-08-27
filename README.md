# Assissted Traffic Control - ATC

### What is it?
An application for generating scripts for `tc` module which is used for Traffic Control in the Linux kernel. Written in Go, but also heavily relying on JavaScript to manage the GUI, it helps the user with applying their idea of shaping traffic through the kernel from an idea to actual shell script.

### How it works?
First, the user interacts with UI in order to bulid a tree structure representing their idea of the traffic. Then that idea is serialized, sent to the back end of the application which generates the script and sends it back. Finally, the script is printed in the UI, ready for the user to be copied and used on the target machine.

### How to use it?
There are 2 ways to use ATC:
- With Docker: Build a docker image from the `Dockerfile` and run it. Then you will have to access the app through your browser,
- Without Docker: Just use `go run main.go`, and then head to `localhost:8888` in your browser.
