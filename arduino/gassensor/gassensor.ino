#define LED 11
 
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  int reading = analogRead(A0);
  Serial.println(reading);
  delay(1000);
}
