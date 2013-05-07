package models

import play.api.Play.current
import com.novus.salat.annotations._
import com.novus.salat.dao._
import com.mongodb.casbah.Imports._
import se.radley.plugin.salat._
import com.novus.salat.global.ctx

case class User (
    @Key("UserId") id: ObjectId = new ObjectId,
    username: String,
    password: String
)                    {
  def getUsername = username
}

object User extends ModelCompanion[User, ObjectId]{

  val files = gridFS("UserFiles")

  val dao = new SalatDAO[User, ObjectId](collection = mongoCollection("users")) {}

  def findOneByUsername(username: String): Option[User] = dao.findOne(MongoDBObject("username" -> username))

  def findPasswordFor(username: String) : String = {
    val user : Option[User] = findOneByUsername(username)
    user.getOrElse(null).getUsername
  }

}
