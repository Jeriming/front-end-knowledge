<template>
  <section class="section-container">
    <div id="main1">
      <h4>Ammo物理引擎</h4>
      <div id="main2">
        <div id="content1">
          <!-- InstanceBeginEditable name="EditRegion8" -->
          <p>
            Bullet是跨平台的开源物理引擎，而Ammo是Bullet转化为JavaScript语言的产品，可以帮助实现碰撞检测、力学模拟，还提供多种关节实现。
          </p>
          <p><strong>一、常用的类：</strong></p>
          <p><strong>1. btVector3类：三维向量类 </strong></p>
          <p>
            该类使用频率很高，由3个浮点数类型的x、y、z变量组成，可以表示速度、点、力等向量。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="200" valign="top"><p>构造器</p></td>
                <td width="368" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="200" valign="top"><p>btVector3()</p></td>
                <td width="368" valign="top">
                  <p>创建一个三维分量初始值都为零的三维向量对象</p>
                </td>
              </tr>
              <tr>
                <td width="200" valign="top"><p>btVector3(x,y,z)</p></td>
                <td width="368" valign="top">
                  <p>创建三维向量对象，三个坐标值分别为x、y、z</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="221" valign="top"><p>方法</p></td>
                <td width="347" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>setX(x)</p></td>
                <td width="347" valign="top"><p>设置向量的x坐标值</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>setY(y)</p></td>
                <td width="347" valign="top"><p>设置向量的y坐标值</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>setY(z)</p></td>
                <td width="347" valign="top"><p>设置向量的z坐标值</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>setValue(x,y,z)</p></td>
                <td width="347" valign="top"><p>设置向量的坐标</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>normalize()</p></td>
                <td width="347" valign="top">
                  <p>获取向量归一化后的单位向量</p>
                </td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>dot(btVector3 v)</p></td>
                <td width="347" valign="top"><p>获取与向量v的点积</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>op_mul(btVector3 v)</p></td>
                <td width="347" valign="top"><p>获取与向量v的叉积</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>op_add(btVector3 v)</p></td>
                <td width="347" valign="top"><p>获取与向量v的和</p></td>
              </tr>
              <tr>
                <td width="221" valign="top"><p>op_sub(btVector3 v)</p></td>
                <td width="347" valign="top"><p>获取与向量v的差</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>2. btTransform类：变换类</strong></p>
          <p>
            该类由位置和方向组合而成，用来表示刚体的变换，如平移、旋转等。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="224" valign="top"><p>构造器</p></td>
                <td width="344" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="224" valign="top"><p>btTransform()</p></td>
                <td width="344" valign="top"><p>无参构造函数</p></td>
              </tr>
              <tr>
                <td width="224" valign="top">
                  <p>btTransform(btQuaternion q, btVector3 v)</p>
                </td>
                <td width="344" valign="top">
                  <p>
                    变换的构造函数，q表示变换旋转信息的四元数，v表示变换平移信息的向量
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="193" valign="top"><p>方法</p></td>
                <td width="375" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="193" valign="top"><p>setIdentity()</p></td>
                <td width="375" valign="top">
                  <p>
                    将当前变换对象设置为初始状态，即将旋转变换矩阵归一化，平移向量3个维度的分量归零
                  </p>
                </td>
              </tr>
              <tr>
                <td width="193" valign="top">
                  <p>setOrigin(btVector3 origin)</p>
                </td>
                <td width="375" valign="top">
                  <p>设置平移变换的向量，origin为平移变换的3x3矩阵</p>
                </td>
              </tr>
              <tr>
                <td width="193" valign="top">
                  <p>setRotation(btQuaternion rotation)</p>
                </td>
                <td width="375" valign="top">
                  <p>
                    设置当前变换对象的旋转变换数据，rotation表示存储旋转数据的四元数对象
                  </p>
                </td>
              </tr>
              <tr>
                <td width="193" valign="top"><p>getOrigin()</p></td>
                <td width="375" valign="top"><p>换取变换的原点</p></td>
              </tr>
              <tr>
                <td width="193" valign="top"><p>getRotation()</p></td>
                <td width="375" valign="top">
                  <p>换取表示旋转信息的四元数</p>
                </td>
              </tr>
              <tr>
                <td width="193" valign="top"><p>getBasic()</p></td>
                <td width="375" valign="top">
                  <p>换取表示变换信息的3x3矩阵</p>
                </td>
              </tr>
              <tr>
                <td width="193" valign="top"><p>setFromOpenGLMatrix(m)</p></td>
                <td width="375" valign="top">
                  <p>
                    设置变换的矩阵，m为旋转平移缩放向量合成的4x4变换矩阵首地址
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>btQuaternion类表示的四元数，用于对三维向量进行变换。</p>
          <p><strong>3. btRigidBody类：刚体类</strong></p>
          <p>
            该类用于存储刚体的一些属性信息，包括线速度、角速度、摩擦系数等，其中封装了多种方法，用于设置和获取相关属性信息。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="239" valign="top"><p>构造器</p></td>
                <td width="329" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="239" valign="top">
                  <p>
                    btRigidBody(btRigidBodyConstructionInfo constructionInfo)
                  </p>
                </td>
                <td width="329" valign="top">
                  <p>创建一个刚体对象，constructionInfo为刚体信息对象</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="262" valign="top"><p>方法</p></td>
                <td width="306" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>getCenterOfMassTransform()</p>
                </td>
                <td width="306" valign="top">
                  <p>获取重心的变换，返回值为获取的四元数</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>setCenterOfMassTransform(btTransform xform)</p>
                </td>
                <td width="306" valign="top">
                  <p>设置刚体变换，参数xform表示需要变换的对象</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>setDamping(lin_damping, ang_damping)</p>
                </td>
                <td width="306" valign="top">
                  <p>设置现行阻尼系数和角阻尼系数</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top"><p>getLinearVelocity()</p></td>
                <td width="306" valign="top">
                  <p>获取线速度，返回值为获取的线速度向量</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top"><p>getAngularVelocity()</p></td>
                <td width="306" valign="top">
                  <p>获取加速度，返回值为获取的角速度向量</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>setAngularFactor(btVector3 angularFactort)</p>
                </td>
                <td width="306" valign="top">
                  <p>获取角度因子，angularFactort为要设置的角度因子</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top"><p>getMotionState()</p></td>
                <td width="306" valign="top">
                  <p>获取刚体的形状，返回值为获取的形状指针</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>applyCentralForce(btVector3 force)</p>
                </td>
                <td width="306" valign="top">
                  <p>应用中心力，force为提供的力向量</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>applyTorch(btVector3 torquel)</p>
                </td>
                <td width="306" valign="top">
                  <p>应用扭矩，torque为要应用的刚体扭矩</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>applyForce(btVector3 force, btVector3 rel_pos)</p>
                </td>
                <td width="306" valign="top">
                  <p>应用力，force为要应用的力，rel_pos为施加力的位置</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>applyCentralImpulse(btVector3 impulse)</p>
                </td>
                <td width="306" valign="top">
                  <p>应用中心冲量，impulse为要应用的冲量</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>applyTorqueImpulse(btVector3 torque)</p>
                </td>
                <td width="306" valign="top">
                  <p>应用扭矩冲量，torque为要应用的冲量</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>applyImpulse ( btVector3 impulse, btVector3 rel_pos)</p>
                </td>
                <td width="306" valign="top">
                  <p>
                    应用冲量，impulse为要应用的冲量，rel_pos为要施加冲量的位置坐标
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>4. btDynamicsWorld类：物理世界类</strong></p>
          <p>
            该类有两个重要的子类，离散物理世界类btDiscreteDynamicsWorld和用于测试的类btSimpleDynamicsWorld类。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="239" valign="top"><p>构造器</p></td>
                <td width="329" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="239" valign="top">
                  <p>
                    btDynamicsWorld ( btbtDispatcher dispatcher,
                    btBroadphaseInterface broadphase, btCollisionConfiguration
                    conf)
                  </p>
                </td>
                <td width="329" valign="top">
                  <p>
                    物理世界类构造器，dispatcher为碰撞检测算法分配器引用，conf为碰撞检测配置信息
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="257" valign="top"><p>方法</p></td>
                <td width="311" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>stepSimulation(timeStep)</p>
                </td>
                <td width="311" valign="top">
                  <p>进行世界物理模拟，timeStep为时间步进</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>addConstraint(btTypedConstraint constraint)</p>
                </td>
                <td width="311" valign="top">
                  <p>在物理世界中添加约束，constraint为约束引用</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>removeConstraint(btTypedConstraint constraint)</p>
                </td>
                <td width="311" valign="top">
                  <p>在物理世界删除约束，constraint为约束引用</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top"><p>setGravity(gravity)</p></td>
                <td width="311" valign="top">
                  <p>设置物理世界的重力，gravity为重力向量</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>addRidgidBody(btRidgidBody body)</p>
                </td>
                <td width="311" valign="top">
                  <p>在物理世界添加刚体，body为要添加的刚体</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>removeRidgidBody(btRidgidBody body)</p>
                </td>
                <td width="311" valign="top"><p>删除物理世界的刚体</p></td>
              </tr>
              <tr>
                <td width="257" valign="top"><p>getNumConstraint()</p></td>
                <td width="311" valign="top"><p>获取物理世界的约束总数</p></td>
              </tr>
              <tr>
                <td width="257" valign="top"><p>getConstraint(index)</p></td>
                <td width="311" valign="top">
                  <p>获取物理世界中的指定约束，index为约束索引</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>getNumCollisionObjects()</p>
                </td>
                <td width="311" valign="top">
                  <p>获取物理世界中碰撞物体的数量</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>getCollisionObjectArray()</p>
                </td>
                <td width="311" valign="top">
                  <p>获取物理世界中碰撞物体的数组</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>
                    contactTest ( btCollisionObject colObj,
                    ContactResultCallback resultCallback)
                  </p>
                </td>
                <td width="311" valign="top">
                  <p>
                    进行接触检测，colObj为指向碰撞物体类的引用，resultCallback为接触回调类的对象
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>5. btDiscreteDynamicsWorld类：离散物理世界类</strong></p>
          <p>
            实际开发中常使用该类来创建物理世界对象，创建时要使用构造器，需要给出碰撞检测算法分配器、碰撞检测粗测算法接口和碰撞检测配置接口。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="280" valign="top"><p>构造器</p></td>
                <td width="288" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="280" valign="top">
                  <p>
                    btDiscreteDynamicsWorld ( btbtDispatcher dispatcher,
                    btBroadphaseInterface pairCache,btConstraintSolver
                    constraintSolver, btCollisionConfiguration conf)
                  </p>
                </td>
                <td width="288" valign="top">
                  <p>
                    离散物理世界类构造器，dispatcher为碰撞检测算法分配器引用，pairCache为碰撞粗测算法接口，constraintSolver为约束解决器引用，conf为碰撞检测配置信息
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="257" valign="top"><p>方法</p></td>
                <td width="311" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>btCollisionWorld getCollisionWorld()</p>
                </td>
                <td width="311" valign="top"><p>获取当前物理世界的引用</p></td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong
              >6. btSoftRigidDynamicsWorld类：支持模拟软体的物理世界</strong
            >
          </p>
          <p>
            可支持模拟软体，继承了btDiscreteDynamicsWorld类。所谓软体，不具有固定形状，可像软布一样改变本身形状的物体。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="293" valign="top"><p>构造器</p></td>
                <td width="275" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="293" valign="top">
                  <p>
                    btSoftRigidDynamicsWorld ( btbtDispatcher dispatcher,
                    btBroadphaseInterface pairCache,btConstraintSolver
                    constraintSolver, btCollisionConfiguration conf,
                    btSoftBodySolver softBodySolver)
                  </p>
                </td>
                <td width="275" valign="top">
                  <p>
                    离散物理世界类构造器，dispatcher为碰撞检测算法分配器引用，pairCache为碰撞粗测算法接口，constraintSolver为约束解决器引用，conf为碰撞检测配置信息
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="257" valign="top"><p>方法</p></td>
                <td width="311" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>addSoftBody(btSoftBody body)</p>
                </td>
                <td width="311" valign="top">
                  <p>向物理世界添加物体，body为指向软体的引用</p>
                </td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>removeSoftBody(btSoftBody body)</p>
                </td>
                <td width="311" valign="top"><p>从物理世界删除指定软体</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>7. btCollisionShape类：碰撞形状类</strong></p>
          <p>
            该类封装了一些判断碰撞形状类型的方法，所有碰撞形状都直接或间接继承自此类。方法有：
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="257" valign="top"><p>构造器</p></td>
                <td width="311" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>btCollisionShape&nbsp;( )</p>
                </td>
                <td width="311" valign="top"><p>碰撞形状构造器</p></td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="258" valign="top"><p>方法</p></td>
                <td width="310" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="258" valign="top">
                  <p>setLocalScaling(btVector3 scaling)</p>
                </td>
                <td width="310" valign="top"><p>设置缩放比</p></td>
              </tr>
              <tr>
                <td width="258" valign="top">
                  <p>calculateLocalInertia(mass, btVector3 inertia)</p>
                </td>
                <td width="310" valign="top">
                  <p>计算惯性，mass为质量，inertia为惯性</p>
                </td>
              </tr>
              <tr>
                <td width="258" valign="top"><p>setMargin(margin)</p></td>
                <td width="310" valign="top"><p>设置碰撞形状边缘数</p></td>
              </tr>
              <tr>
                <td width="258" valign="top"><p>getMargin()</p></td>
                <td width="310" valign="top"><p>获取碰撞形状边缘数</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>8. btBoxShape类：长方体盒碰撞形状</strong></p>
          <p>
            该类可用于盒子、箱子等规则物体。 <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="257" valign="top"><p>构造器</p></td>
                <td width="311" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="257" valign="top">
                  <p>btBoxShape(btVector3 boxHalfExtents)</p>
                </td>
                <td width="311" valign="top">
                  <p>构造器，boxHalfExtents表示立方体盒子的半区域</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="258" valign="top"><p>方法</p></td>
                <td width="310" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="258" valign="top"><p>setMargin(margin)</p></td>
                <td width="310" valign="top"><p>设置碰撞形状边缘数</p></td>
              </tr>
              <tr>
                <td width="258" valign="top"><p>getMargin()</p></td>
                <td width="310" valign="top"><p>获取碰撞形状边缘数</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>9. btStaticPlaneShape类：静态平面形状</strong></p>
          <p>
            该类表示静态的平面，如地面、屋顶等，创建时需要给出法向量。 <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="252" valign="top"><p>构造器</p></td>
                <td width="316" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="252" valign="top">
                  <p>
                    btStaticPlaneShape(btVector3 planeNormal, float
                    planeConstant)
                  </p>
                </td>
                <td width="316" valign="top">
                  <p>
                    静态平面构造器，参数planeNormal为平面法向量，planeConstant为平面上任意一点
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="248" valign="top"><p>方法</p></td>
                <td width="320" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="248" valign="top"><p>getPlaneNormal()</p></td>
                <td width="320" valign="top"><p>获取平面形状的法向量</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>10. btSphereShape类：球体形状</strong></p>
          <p>
            该类表示一个球体。 <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="181" valign="top"><p>构造器</p></td>
                <td width="387" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>btSphereShape(radius)</p></td>
                <td width="387" valign="top">
                  <p>球体碰撞形状构造器，radius为球半径</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="181" valign="top"><p>方法</p></td>
                <td width="387" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>setMargin(margin)</p></td>
                <td width="387" valign="top"><p>设置碰撞形状边缘数</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>getMargin()</p></td>
                <td width="387" valign="top"><p>获取碰撞形状边缘数</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>getRadius( )</p></td>
                <td width="387" valign="top"><p>获取球的半径</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>11. btCylinderShape类：圆柱形状</strong></p>
          <p>
            该类表示一个圆柱形状，如杆、金币、石柱等都可以采用此类，但碰撞计算量较大，不如胶囊。
            <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="181" valign="top"><p>构造器</p></td>
                <td width="387" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="181" valign="top">
                  <p>btCylinderShape(btVector3 halfExtents)</p>
                </td>
                <td width="387" valign="top">
                  <p>
                    圆柱对象构造器，halfExtents为圆柱的半区域，三维分量，第1和3维表示圆柱的长短半径，第2维是长度
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="181" valign="top"><p>方法</p></td>
                <td width="387" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>getRadius( )</p></td>
                <td width="387" valign="top"><p>获取圆柱的半径</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>12. btCapsuleShape类：胶囊形状</strong></p>
          <p>
            该类表示一个胶囊形状，碰撞计算量比圆柱小，旗杆、铅笔等一般使用该类。
            <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="205" valign="top"><p>构造器</p></td>
                <td width="363" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="205" valign="top">
                  <p>btCapsuleShape(float radius, float height)</p>
                </td>
                <td width="363" valign="top">
                  <p>
                    胶囊碰撞形状对象构造器，参数radius为两端球面的半径，height为中间圆柱的长度
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="181" valign="top"><p>方法</p></td>
                <td width="387" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>getRadius( )</p></td>
                <td width="387" valign="top"><p>获取胶囊截面的半径</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>getHalfHeight( )</p></td>
                <td width="387" valign="top">
                  <p>获取中间圆柱部分长度值的一半</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>13. btConeShape类：圆锥形状类</strong></p>
          <p>
            该类表示圆锥形状。 <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="205" valign="top"><p>构造器</p></td>
                <td width="363" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="205" valign="top">
                  <p>btConeShape(float radius, float height)</p>
                </td>
                <td width="363" valign="top">
                  <p>
                    圆锥碰撞形状对象构造器，参数radius为圆锥的半径，height为圆锥的高度
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="181" valign="top"><p>方法</p></td>
                <td width="387" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="181" valign="top"><p>getRadius( )</p></td>
                <td width="387" valign="top"><p>获取圆锥的半径</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>14. btCompoundShape类：复合形状</strong></p>
          <p>
            该类表示一个复合形状，可以通过创建多个单一形状组合成一个复合形状对象。
            <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="183" valign="top"><p>构造器</p></td>
                <td width="385" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="183" valign="top"><p>btCompoundShape()</p></td>
                <td width="385" valign="top"><p>复合形状构造器</p></td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="216" valign="top"><p>方法</p></td>
                <td width="352" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="216" valign="top">
                  <p>
                    addChildShape ( btTransform localTransform, btCollisionShape
                    shape)
                  </p>
                </td>
                <td width="352" valign="top">
                  <p>
                    向组合形状中添加子形状，localTransform为子形状的变换，shape为添加的子形状
                  </p>
                </td>
              </tr>
              <tr>
                <td width="216" valign="top">
                  <p>removeChildShape( childShapeindex)</p>
                </td>
                <td width="352" valign="top">
                  <p>
                    从组合形状中删除指定的子形状， childShapeindex为子形状索引
                  </p>
                </td>
              </tr>
              <tr>
                <td width="216" valign="top"><p>getNumChildShapes()</p></td>
                <td width="352" valign="top">
                  <p>获取当前组合形状中子形状的数量</p>
                </td>
              </tr>
              <tr>
                <td width="216" valign="top"><p>getChildShape(index)</p></td>
                <td width="352" valign="top">
                  <p>获取组合形状中指定索引编号的子形状，index为子形状索引</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>15. btRaycastVehicle类：交通工具类 </strong></p>
          <p>
            交通工具类是模拟现实世界中的交通工具，有刚体车身、四个轮子，支持前轮驱动和后轮驱动，支持车轮转向等，提供了添加和更新车轮的方法，设置车轮刹车的方法。
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="274" valign="top"><p>方法</p></td>
                <td width="294" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>
                    updateAction ( btCollisionWorld collisionWorld, btScalar
                    step)
                  </p>
                </td>
                <td width="294" valign="top">
                  <p>
                    更新交通工具，collisionWorld为物理世界的引用，step为步长
                  </p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>btTransform getChassisWorldTransform()</p>
                </td>
                <td width="294" valign="top"><p>获取交通工具的变换对象</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>updateVehicle(btScalar step)</p>
                </td>
                <td width="294" valign="top">
                  <p>更新交通工具，step为更新的步长</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top"><p>resetSuspension()</p></td>
                <td width="294" valign="top"><p>重置悬挂系统的参数</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>btScalar getSteeringValue (wheelindex)</p>
                </td>
                <td width="294" valign="top">
                  <p>获取操纵车轮的系数，wheelindex表示车轮索引值</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>setSteeringValue(steering, wheelindex)</p>
                </td>
                <td width="294" valign="top">
                  <p>设置操纵车轮系数的值，steering为要设置的值</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>applyEngineForce(btScalar force, int &nbsp;wheelindex)</p>
                </td>
                <td width="294" valign="top">
                  <p>车轮上应用力，force为力的大小，wheelindex表示车轮索引值</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>updateWheelTransform(wheelindex)</p>
                </td>
                <td width="294" valign="top">
                  <p>更新车轮的变换对象，wheelindex表示车轮索引值</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>
                    btWheelInfo addWheel ( btVector3 connectionPointCS0,
                    btVector3 wheelDirectionCS0, btVector3 wheelAxleCS, btScalar
                    suspensionRestLength, btScalar wheelRsdius, btVehicleTuning
                    tuning,boolean isFrontWheel)
                  </p>
                </td>
                <td width="294" valign="top">
                  <p>
                    给交通工具添加车轮，connectionPointCS0为车轮连接点，wheelDirectionCS0为车轮方向，wheelAxleCS为车轮的轴向量，suspensionRestLength为车轮悬挂系统在松弛态下的长度，wheelRsdius为车轮半径，tuning为协调器，isFrontWheel为是否添加驱动力
                  </p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top"><p>getNumWheels()</p></td>
                <td width="294" valign="top">
                  <p>获取交通工具上的车轮总数</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>btWheelInfo getWheelInfo(index)</p>
                </td>
                <td width="294" valign="top">
                  <p>获取交通工具上的车轮，index为车轮索引</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>setBrake(btScalar brake, index)</p>
                </td>
                <td width="294" valign="top">
                  <p>设置刹车系数，brake为要设置的刹车系数</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>updateSuspension (btScalar deltaTime)</p>
                </td>
                <td width="294" valign="top">
                  <p>更新悬挂系统，deltaTime为更新步长</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>updateFriction(btScalar timeStep)</p>
                </td>
                <td width="294" valign="top">
                  <p>更新摩擦，timeStep为更新步长</p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>btRigidBody getRigidBody()</p>
                </td>
                <td width="294" valign="top"><p>获取交通工具刚体</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>btVector3 getForwardVector()</p>
                </td>
                <td width="294" valign="top"><p>获取交通工具的前进向量</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>btScalar getCurrentSpeedKmHour()</p>
                </td>
                <td width="294" valign="top"><p>获取交通工具的当前速度</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>setCoordinateSystem(rightIndex, upIndex, forwardIndex)</p>
                </td>
                <td width="294" valign="top">
                  <p>
                    设置坐标系统，rightIndex为右方向的索引，upIndex为上方向索引，forwardIndex为前进方向索引
                  </p>
                </td>
              </tr>
              <tr>
                <td width="274" valign="top"><p>getUserConstrainType ()</p></td>
                <td width="294" valign="top"><p>获取关节类型</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>setUserConstrainType(userConstraintType)</p>
                </td>
                <td width="294" valign="top"><p>设置关节类型</p></td>
              </tr>
              <tr>
                <td width="274" valign="top">
                  <p>setUserConstraintId(uid)</p>
                </td>
                <td width="294" valign="top"><p>设置关节id</p></td>
              </tr>
              <tr>
                <td width="274" valign="top"><p>getUserConstraintId()</p></td>
                <td width="294" valign="top"><p>获取关节id</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>16. btSoftBodyHelps类：软体</strong></p>
          <p>
            软体是不同于固定形状的刚体，如绳索，可以实现拉伸、弯曲等不同姿态，如软布可以呈现上下波动。创建软体时必须使用软体帮助类，该类提供了创建软体的方法：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="261" valign="top"><p>方法</p></td>
                <td width="307" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="261" valign="top">
                  <p>
                    CreateRope ( btSoftBodyWorldInfo worldInfo, btVector3 from,
                    btVector3 to, res, fixeds)
                  </p>
                </td>
                <td width="307" valign="top">
                  <p>
                    创建绳索软体的方法，worldInfo为软体世界信息，from为绳索起点位置，to为绳索终点位置，res为恢复系数，fixeds为坚硬系数
                  </p>
                </td>
              </tr>
              <tr>
                <td width="261" valign="top">
                  <p>
                    CreatePatch(btSoftBodyWorldInfo worldInfo, btVector3
                    corner00, btVector3 corner10, btVector3 corner01, btVector3
                    corner11, resx, resy, fixeds, boolean gendiags)
                  </p>
                </td>
                <td width="307" valign="top">
                  <p>
                    创建软布的方法，worldInfo为软体世界信息，corner00、corner10、corner01、corner11为软布四个角的坐标，resx为顶点列数，resy为顶点行数，gendiags为软布四角是否固定，true表示固定
                  </p>
                </td>
              </tr>
              <tr>
                <td width="261" valign="top">
                  <p>
                    CreateEllipsoid(btSoftBodyWorldInfo worldInfo, btVector3
                    center, btVector3 radius, res)
                  </p>
                </td>
                <td width="307" valign="top">
                  <p>
                    创建球软体的方法，worldInfo为软体世界信息，center为中心点坐标，radius为半径，res为恢复系数
                  </p>
                </td>
              </tr>
              <tr>
                <td width="261" valign="top">
                  <p>
                    CreateFromTriMesh(btSoftBody worldInfo, vertives, triangles,
                    ntriangles, boolean randomizeConstraints)
                  </p>
                </td>
                <td width="307" valign="top">
                  <p>
                    创建三角形网络软体的方法，worldInfo为软体世界信息，vertices为顶点数组坐标，triangles为顶点索引数组，ntriangles为三角形总数
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>二、关节：</strong><strong> </strong><br />
            关节是两个物体之间的约束，关节的父类为btTypedConstraint类，其他关节都继承自该类，其封装了具体关节的共用方法。
            <br />
            1）构造器为：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="183" valign="top"><p>构造器</p></td>
                <td width="385" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="183" valign="top"><p>btTypedConstraint()</p></td>
                <td width="385" valign="top"><p>关节构造器</p></td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="225" valign="top"><p>方法</p></td>
                <td width="343" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="225" valign="top">
                  <p>getBreakingImpulseThreshold()</p>
                </td>
                <td width="343" valign="top"><p>获取毁坏关节的最大冲量</p></td>
              </tr>
              <tr>
                <td width="225" valign="top">
                  <p>setBreakingImpulseThreshold( threshold)</p>
                </td>
                <td width="343" valign="top">
                  <p>设置毁坏关节的最大冲量， threshold为要设置的冲量值</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>关节主要有铰链关节、滑动关节、六自由度关节、点对点关节等。</p>
          <p><strong>1. 铰链关节btHingeConstraint：</strong></p>
          <p>
            铰链是仅有一个旋转自由度的关节，通过铰链的约束限制，相关刚体仅能绕铰链轴旋转。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="247" valign="top"><p>构造器</p></td>
                <td width="321" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="247" valign="top">
                  <p>
                    btHingeConstraint ( btRigidBody rbA, btRigidBody rbB,
                    btVector3 pivotInA, btVector3 pivotInB, btVector3 axisInA,
                    btVector3 axisInB, boolean useReferenceFrameA)
                  </p>
                </td>
                <td width="321" valign="top">
                  <p>
                    铰链构造器，参数rbA和rbB为要添加约束的两个刚体，pivotInA和pivotInB分别为对应的中心点，axisInA和axisInB为两个刚体的轴向量，useReferenceFrameA为两个刚体之间的约束关系，正常对应还是交叉对应，默认false
                  </p>
                </td>
              </tr>
              <tr>
                <td width="247" valign="top">
                  <p>
                    btHingeConstraint(btRigidBody rbA, btVector3 pivotInA,
                    btVector3 axisInA, boolean useReferenceFrameA)
                  </p>
                </td>
                <td width="321" valign="top">
                  <p>
                    铰链构造器，参数rbA为要添加约束的两个刚体，pivotInA为对应的中心点，axisInA为两个刚体的轴向量，useReferenceFrameA为两个刚体之间的约束关系
                  </p>
                </td>
              </tr>
              <tr>
                <td width="247" valign="top">
                  <p>
                    btHingeConstraint(btRigidBody rbA, btRigidBody rbB,
                    btTransform rbAFrame, btTransform rbBFrame, &nbsp;boolean
                    useReferenceFrameA)
                  </p>
                </td>
                <td width="321" valign="top">
                  <p>
                    铰链构造器，rbAFrame为第1个刚体的变换对象，rbBFrameaxisInB为第2个刚体的变换对象，useReferenceFrameA为两个刚体之间的约束关系，正常对应还是交叉对应
                  </p>
                </td>
              </tr>
              <tr>
                <td width="247" valign="top">
                  <p>
                    btHingeConstraint(btRigidBody rbA, &nbsp;btTransform
                    rbAFrame, &nbsp;boolean useReferenceFrameA)
                  </p>
                </td>
                <td width="321" valign="top">
                  <p>
                    铰链构造器，rbAFrame为刚体的变换对象，useReferenceFrameA表示rbA是否与rbAFrame对应，默认false
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="241" valign="top"><p>方法</p></td>
                <td width="327" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>getHingeAngle()</p></td>
                <td width="327" valign="top">
                  <p>获取铰链当前的旋转角度值</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setLimit ( float low, float high)</p>
                </td>
                <td width="327" valign="top">
                  <p>设置铰链的转动范围，low为下限值，high为上限值</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>getLowerLimit()</p></td>
                <td width="327" valign="top"><p>获取转动角度的下限值</p></td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>getUpperLimit()</p></td>
                <td width="327" valign="top"><p>获取转动角度的上限值</p></td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>
                    enableAngularMotor ( boolean enableMotor, float
                    targetVelocity, float maxMotorImpulse)
                  </p>
                </td>
                <td width="327" valign="top">
                  <p>
                    启动马达，enableMotor为是否允许使用马达，targetVelocity为关节角速度，maxMotorImpulse为最大马达驱动力
                  </p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setAngularOnly(boolean angularOnly)</p>
                </td>
                <td width="327" valign="top"><p>设置是否只开启角转动</p></td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>enableMotor(boolean enableMotor)</p>
                </td>
                <td width="327" valign="top"><p>设置是否开启马达</p></td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setMaxMotorImpulse(maxMotorImpluse)</p>
                </td>
                <td width="327" valign="top"><p>设置马达的最大冲量</p></td>
              </tr>
            </tbody>
          </table>
          <p>马达用于模拟提供动力的部件。</p>
          <p><strong>2. 滑动关节btSliderConstraint：</strong></p>
          <p>
            滑动关节是一种仅有平移和旋转自由度的关节，如螺丝和螺母。 <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="224" valign="top"><p>构造器</p></td>
                <td width="344" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="224" valign="top">
                  <p>
                    btSliderConstraint(btRigidBody rbA, btRigidBody rbB,
                    btTransform frameInA, btTransform frameInB, boolean
                    useLinearReferenceFrameA)
                  </p>
                </td>
                <td width="344" valign="top">
                  <p>
                    滑动关节构造器，rbA和rbB为两个刚体，frameInA和frameInB分别为从约束位置到刚体质心位置的变换，useLinearReferenceFrameA表示两个刚体与两个约束之间的对应关系，为true时rbA对应frameInA，为false时交叉对应
                  </p>
                </td>
              </tr>
              <tr>
                <td width="224" valign="top">
                  <p>
                    btSliderConstraint(btRigidBody rbA, btTransform frameInA,
                    boolean useLinearReferenceFrameA)
                  </p>
                </td>
                <td width="344" valign="top">
                  <p>
                    滑动关节构造器，rbA为刚体，frameInA为从约束位置到刚体质心位置的变换，useLinearReferenceFrameA表示刚体与约束之间的对应关系
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="313" valign="top"><p>方法</p></td>
                <td width="255" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setUpperLinLimit ( float upperLimit)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置滑动关节滑动距离上限</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setLowerLinLimit ( float lowerLimit)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置滑动关节滑动距离下限</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top"><p>getUpperLinLimit()</p></td>
                <td width="255" valign="top"><p>获取滑动距离的上限值</p></td>
              </tr>
              <tr>
                <td width="313" valign="top"><p>getLowerLinLimit()</p></td>
                <td width="255" valign="top"><p>获取滑动距离的下限值</p></td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setUpperAngLimit ( float upperLimit)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置滑动关节转动角度上限</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setLowerAngLimit ( float lowerLimit)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置滑动关节转动角度下限</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top"><p>getUpperAngLimit()</p></td>
                <td width="255" valign="top"><p>获取转动角度的上限值</p></td>
              </tr>
              <tr>
                <td width="313" valign="top"><p>getLowerAngLimit()</p></td>
                <td width="255" valign="top"><p>获取转动角度的下限值</p></td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setDampingDirLin(float dampingDirLin)</p>
                </td>
                <td width="255" valign="top"><p>设置关节的滑动阻尼系数</p></td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setDampingDirAng(float dampingDirAng)</p>
                </td>
                <td width="255" valign="top"><p>设置关节的转动阻尼系数</p></td>
              </tr>
              <tr>
                <td width="313" valign="top"><p>getDampingDirLin()</p></td>
                <td width="255" valign="top"><p>获取关节的滑动阻尼系数</p></td>
              </tr>
              <tr>
                <td width="313" valign="top"><p>getDampingDirAng()</p></td>
                <td width="255" valign="top"><p>获取关节的转动阻尼系数</p></td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setPoweredLinMotor ( boolean onOff)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置是否启动滑动对应的马达</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setMaxLinMotorForce (float maxLinMotorForce)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置驱动滑动马达的最大力</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>
                    setTargetLinMotorVelocity (float targetLinMotorVelocity)
                  </p>
                </td>
                <td width="255" valign="top"><p>设置驱动滑动马达的速度</p></td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setPoweredAngMotor ( boolean onOff)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置是否启动转动对应的马达</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>setMaxAngMotorForce (float maxAngMotorForce)</p>
                </td>
                <td width="255" valign="top">
                  <p>设置驱动转动马达的最大力</p>
                </td>
              </tr>
              <tr>
                <td width="313" valign="top">
                  <p>
                    setTargetAngMotorVelocity (float targetangMotorVelocity)
                  </p>
                </td>
                <td width="255" valign="top"><p>设置驱动转动马达的速度</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>3. 齿轮关节btGearConstraint：</strong></p>
          <p>
            为了模拟现实世界中齿轮之间的转动效果。 <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="275" valign="top"><p>构造器</p></td>
                <td width="293" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="275" valign="top">
                  <p>
                    btGearConstraint(btRigidBody rbA, btRigidBody rbB, btVector3
                    axisA, btVector3 axisA, float ratio)
                  </p>
                </td>
                <td width="293" valign="top">
                  <p>
                    齿轮关节构造器，rbA和rbB为两个刚体，axisA和axisB分别为两个刚体的轴向量，ratio为转动比例
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="241" valign="top"><p>方法</p></td>
                <td width="327" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setAxisA ( btVector3 axisA)</p>
                </td>
                <td width="327" valign="top">
                  <p>设置关联第1个刚体的轴向量</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setAxisB ( btVector3 axisB)</p>
                </td>
                <td width="327" valign="top">
                  <p>设置关联第2个刚体的轴向量</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>setRatio ( ratio)</p></td>
                <td width="327" valign="top"><p>设置齿轮关节转动比例</p></td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>gettAxisA()</p></td>
                <td width="327" valign="top">
                  <p>获取关联第1个刚体的轴向量</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>gettAxisB()</p></td>
                <td width="327" valign="top">
                  <p>获取关联第1个刚体的轴向量</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>getRatio( )</p></td>
                <td width="327" valign="top"><p>获取齿轮关节的转动比例</p></td>
              </tr>
            </tbody>
          </table>
          <p><strong>4. 点对点关节btPoint2PointConstraint：</strong></p>
          <p>
            点对点关节模拟了两个物体上某两个点呈现连接效果。 <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="275" valign="top"><p>构造器</p></td>
                <td width="293" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="275" valign="top">
                  <p>
                    btPoint2PointConstraint(btRigidBody rbA, btRigidBody rbB,
                    btVector3 pivotInA, btVector3 pivotInB)
                  </p>
                </td>
                <td width="293" valign="top">
                  <p>
                    点对点约束构造器，rbA和rbB为两个刚体，pivotInA和pivotInB为关节分别在两个刚体坐标系中的位置
                  </p>
                </td>
              </tr>
              <tr>
                <td width="275" valign="top">
                  <p>
                    btPoint2PointConstraint(btRigidBody rbA, btVector3 pivotInA)
                  </p>
                </td>
                <td width="293" valign="top">
                  <p>点对点约束构造器，pivotInA为关节在此刚体坐标系中的位置</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="241" valign="top"><p>方法</p></td>
                <td width="327" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setPivotA ( btVector3 pivotA)</p>
                </td>
                <td width="327" valign="top">
                  <p>设置关节在第1个刚体坐标系中的位置</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top">
                  <p>setPivotB ( btVector3 pivotB)</p>
                </td>
                <td width="327" valign="top">
                  <p>设置关节在第2个刚体坐标系中的位置</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>getPivotInA ()</p></td>
                <td width="327" valign="top">
                  <p>获取关节在第1个刚体坐标系中的位置</p>
                </td>
              </tr>
              <tr>
                <td width="241" valign="top"><p>getPivotInB ()</p></td>
                <td width="327" valign="top">
                  <p>获取关节在第2个刚体坐标系中的位置</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>5. 六自由度关节btGeneric6DofConstraint：</strong></p>
          <p>
            六自由度关节有6个不同的自由度，包括3个平移自由度和3个转动自由度，可以模拟动物关节及机械结构，如肘关节、颈关节、机械手臂等。通过锁死或限制此关节的某个或某几个自由度，可以模拟其他类型的关节。
            <br />
            1）构造器：
          </p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="217" valign="top"><p>构造器</p></td>
                <td width="351" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="217" valign="top">
                  <p>
                    btGeneric6DofConstraint(btRigidBody rbA, btRigidBody rbB,
                    btTransform frameInA, btTransform frameInB, boolean
                    useLinearReferenceFrameA)
                  </p>
                </td>
                <td width="351" valign="top">
                  <p>
                    6自由度关节构造器，rbA和rbB为两个刚体，frameInA和frameInB分别为从约束位置到刚体质心位置的变换，useLinearReferenceFrameA表示两个刚体与两个约束之间的对应关系，为true时rbA对应frameInA，为false时交叉对应
                  </p>
                </td>
              </tr>
              <tr>
                <td width="217" valign="top">
                  <p>
                    btGeneric6DofConstraint(btRigidBody rbA, btTransform
                    frameInA, boolean useLinearReferenceFrameA)
                  </p>
                </td>
                <td width="351" valign="top">
                  <p>
                    6自由度关节构造器，rbA为刚体，frameInA为从约束位置到刚体质心位置的变换，useLinearReferenceFrameA表示两个刚体与两个约束之间的对应关系
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>2）方法：</p>
          <table border="1" cellspacing="0">
            <tbody>
              <tr>
                <td width="262" valign="top"><p>方法</p></td>
                <td width="306" valign="top"><p>含义</p></td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>setLinearUpperLimit (bt Vector3 linearUpper)</p>
                </td>
                <td width="306" valign="top">
                  <p>设置关节3个滑动自由度距离的上限</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>setLinearLowerLimit ( btVector3 linearLower)</p>
                </td>
                <td width="306" valign="top">
                  <p>设置关节3个滑动自由度距离的下限</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>seAngularUpperLimit ( btVector3 angularUpper)</p>
                </td>
                <td width="306" valign="top">
                  <p>设置关节3个转动自由度距离的上限</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>setAngularLowerLimit ( btVector3 angularLower)</p>
                </td>
                <td width="306" valign="top">
                  <p>设置关节3个转动自由度距离的下限</p>
                </td>
              </tr>
              <tr>
                <td width="262" valign="top">
                  <p>getAngular(int axis_index)</p>
                </td>
                <td width="306" valign="top">
                  <p>获取指定轴的旋转角度，基于欧拉角的计算方法</p>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- InstanceEndEditable -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: () => null
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.section-container {
  width: 100%;
  margin-bottom: 30px;
  .code-show-container {
    white-space: pre;
    background-color: #f2f2f2;
  }
  .words-show-container {
    white-space: pre;
    background-color: #ffffff;
  }
  .content-box-content {
    width: 100px;
    height: 100px;
    border: 1px solid grey;
    padding: 1px;
    background-color: blue;
    box-sizing: content-box;
  }
  .border-box-content {
    width: 100px;
    height: 100px;
    border: 1px solid grey;
    padding: 1px;
    background-color: blue;
    box-sizing: border-box;
  }
}
</style>
