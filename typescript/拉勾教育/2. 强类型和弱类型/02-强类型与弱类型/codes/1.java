class Main {
  static void foo(int num) {
    System.out.println(num);
  }

  public static void main(String[] args) {
    Main.foo(100); // ok

    Main.foo("100"); // error "100" is a string

    Main.for(Integer.parseInt("100")); // ok
  }
}