use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn adding(a: i32, b: i32) -> i32 {
    a + b
}

#[test]
fn add_test() {
    assert_eq!(1 + 1, adding(1, 1));
}
