#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi(object)]
#[derive(Default)]
pub struct ToHtmlArgs {
  pub ugly: Option<bool>,
}

#[napi]
pub fn bbcode_to_html(input: String, args: Option<ToHtmlArgs>) -> String {
  if args.unwrap_or_default().ugly.unwrap_or(false) {
    bbclash::bbcode_to_html_ugly(&input)
  } else {
    bbclash::bbcode_to_html(&input)
  }
}
