#include<iostream>
using namespace std;

  int main() {
      int num = 10;
      int product = 1;
      for(int i=num; i >= 1; i--) {
          product = product * i;
      }
      cout << product << endl;
      return 0;
  }