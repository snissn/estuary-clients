/* 
 * Estuary API
 *
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct MainImportDealBody {
  #[serde(rename = "coluuid")]
  coluuid: Option<String>,
  #[serde(rename = "dealIDs")]
  deal_ids: Option<Vec<i32>>,
  #[serde(rename = "dir")]
  dir: Option<String>,
  #[serde(rename = "name")]
  name: Option<String>
}

impl MainImportDealBody {
  pub fn new() -> MainImportDealBody {
    MainImportDealBody {
      coluuid: None,
      deal_ids: None,
      dir: None,
      name: None
    }
  }

  pub fn set_coluuid(&mut self, coluuid: String) {
    self.coluuid = Some(coluuid);
  }

  pub fn with_coluuid(mut self, coluuid: String) -> MainImportDealBody {
    self.coluuid = Some(coluuid);
    self
  }

  pub fn coluuid(&self) -> Option<&String> {
    self.coluuid.as_ref()
  }

  pub fn reset_coluuid(&mut self) {
    self.coluuid = None;
  }

  pub fn set_deal_ids(&mut self, deal_ids: Vec<i32>) {
    self.deal_ids = Some(deal_ids);
  }

  pub fn with_deal_ids(mut self, deal_ids: Vec<i32>) -> MainImportDealBody {
    self.deal_ids = Some(deal_ids);
    self
  }

  pub fn deal_ids(&self) -> Option<&Vec<i32>> {
    self.deal_ids.as_ref()
  }

  pub fn reset_deal_ids(&mut self) {
    self.deal_ids = None;
  }

  pub fn set_dir(&mut self, dir: String) {
    self.dir = Some(dir);
  }

  pub fn with_dir(mut self, dir: String) -> MainImportDealBody {
    self.dir = Some(dir);
    self
  }

  pub fn dir(&self) -> Option<&String> {
    self.dir.as_ref()
  }

  pub fn reset_dir(&mut self) {
    self.dir = None;
  }

  pub fn set_name(&mut self, name: String) {
    self.name = Some(name);
  }

  pub fn with_name(mut self, name: String) -> MainImportDealBody {
    self.name = Some(name);
    self
  }

  pub fn name(&self) -> Option<&String> {
    self.name.as_ref()
  }

  pub fn reset_name(&mut self) {
    self.name = None;
  }

}



